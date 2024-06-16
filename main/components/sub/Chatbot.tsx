"use client";
import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";
import '@/app/globals.css';
import Image from 'next/image';

const Chatbot: React.FC = () => {
  const [model, setModel] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const initializeModel = async () => {
      try {
        const genAI = new GoogleGenerativeAI("AIzaSyClmhbY7Fsw4GlsKt-37itASSZtx6-qcOU");
        const genModel = genAI.getGenerativeModel({ model: "gemini-pro" });
        setModel(genModel);

        const systemPrompt = "You are a chatbot on Muhammad Haroon's personal portfolio website.Muhammad Haroon has intermediate experience in DevOps and Cyber Security. Muhammad Haroon is pursuing bachelors degree at NUST. Your job is to greet the user and guide them for what they need.";
        const chat = await genModel.startChat({ history: [] });
        const result = await chat.sendMessage(systemPrompt);
        const response = await result.response;
        const text = response.text();

        const newUserRole = {
          role: "user",
          parts: systemPrompt,
        };
        const newAIRole = {
          role: "model",
          parts: text,
        };

        setHistory([newUserRole, newAIRole]);
      } catch (error) {
        console.error("Error initializing model:", error);
      }
    };

    initializeModel();
  }, []);

  const getResponse = async (prompt: string) => {
    try {
      if (!model) return "";

      const chat = await model.startChat({ history });
      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(response.text());

      return text;
    } catch (error) {
      console.error("Error getting response:", error);
      return "";
    }
  };

  const userDiv = (data: string) => {
    return `
      <!-- User Chat -->
    <div class="flex items-center gap-2 justify-start">
      <img
        src="/user.jpg"
        alt="user icon"
        class="w-10 h-10 rounded-full"
      />
      <p class="bg-gemDeep text-white p-1 rounded-md shadow-md  ">
        ${data}
      </p>
    </div>
    `;
  };
  

  const aiDiv = (data: string) => {
    return  `
    <!-- AI Chat -->
    <div class="flex gap-2 justify-end">
      <pre class="bg-gemRegular/40 text-gemDeep p-1 rounded-md shadow-md whitespace-pre-wrap">
        ${data}
      </pre>
      <img
        src="/scriptkiddie.png"
        alt="user icon"
        class="w-10 h-10 rounded-full"
      />
    </div>
  `;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const userMessage = (event.target as any).prompt;
      const chatArea = document.getElementById("chat-content");

      const prompt = userMessage.value.trim();
      if (prompt === "") {
        return;
      }

      if (chatArea) {
        chatArea.innerHTML += userDiv(prompt);
        userMessage.value = "";
        const aiResponse = await getResponse(prompt);
        const mdText = md().render(aiResponse);

        if (chatArea) {
          chatArea.innerHTML += aiDiv(mdText);
        }

        setHistory((prevHistory) => {
          const newUserRole = { role: "user", parts: prompt };
          const newAIRole = { role: "model", parts: aiResponse };
          const updatedHistory = [...prevHistory, newUserRole, newAIRole];
          console.log(updatedHistory); // Log the updated history
          return updatedHistory;
        });
      }
    } catch (error) {
      console.error("Error handling submit:", error);
    }
  };

  const toggleChat = () => {
    const header = document.querySelector('.bg-gemRegular');
    const chatContainer = document.getElementById('chat-container');
    const chatForm = document.getElementById('chat-form');

    header?.classList.toggle('hidden');
    chatContainer?.classList.toggle('hidden');
    chatForm?.classList.toggle('hidden');
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  };
  

  return (
    <div className='fixed position: absolute'>
      {/* Header */}
      <header className="p-2 bg-gemRegular flex gap-5 items-center">
        <div id="toggleChatbot" className="text-gemDeep focus:outline-none" onClick={toggleChat}>
          <Image
            src="/scriptkiddie.png"
            alt="chat icon"
            style={{ marginBottom: '47px' }}
            width={30}
            height={30}
          />
        </div>
      </header>
      {/* Chat Box */}
      <div style={{ background:'rgb(0 159 255 / 12%)',marginTop:'-20vh', height: isChatOpen ? '46vh' : '0vh' ,width: isChatOpen ? 'fit-content' : '0vh' }}>
        <div className="  flex-1 overflow-y-auto hidden" id="chat-container">
          {/* Chat area */}
          <div className="p-2 flex flex-col gap-4" id="chat-content"></div>
        </div >
        {/* prompt */}
        <form onSubmit={handleSubmit} className="p-2 h-fit hidden" id="chat-form">
        <textarea
          name="prompt"
          id="prompt"
          style={{ margin: '0rem' }}
          cols={30}
          rows={4}
          className="w-full p-2 rounded-auto resize-none focus:outline-none"
          placeholder="   Enter message here..."
          
        ></textarea>

          <button
            type="submit"
            className="w-full p-1 bg-gemDeep rounded text-white "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;