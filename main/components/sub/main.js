import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";
// Initialize the model
const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

let history = [];

async function chatInitializer() {
  const system_prompt =
    "You are a chatbot on Muhammad Haroon's personal portfolio website. Your job is to greet the user and guide them for what they need.";
  const chat = await model.startChat({ history: history });
  const result = await chat.sendMessage(system_prompt);
  const response = await result.response;
  const text = response.text();

  let newUserRole = {
    role: "user",
    parts: system_prompt,
  };
  let newAIRole = {
    role: "model",
    parts: text,
  };

  history.push(newUserRole);
  history.push(newAIRole);

  console.log(history);
}

async function getResponse(prompt) {
  const chat = await model.startChat({ history: history });
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
  return text;
}

// user chat div
export const userDiv = (data) => {
  return `
    <!-- User Chat -->
    <div class="flex items-center gap-2 justify-start">
      <img
        src="user.jpg"
        alt="user icon"
        class="w-10 h-10 rounded-full"
      />
      <p class="bg-gemDeep text-white p-1 rounded-md shadow-md  ">
        ${data}
      </p>
    </div>
  `;
};

// AI Chat div
export const aiDiv = (data) => {
  return `
    <!-- AI Chat -->
    <div class="flex gap-2 justify-end">
      <pre class="bg-gemRegular/40 text-gemDeep p-1 rounded-md shadow-md whitespace-pre-wrap">
        ${data}
      </pre>
      <img
        src="/public/scriptkiddie.png"
        alt="user icon"
        class="w-10 h-10 rounded-full"
      />
    </div>
  `;
};

async function handleSubmit(event) {
  event.preventDefault();

  let userMessage = document.getElementById("prompt");
  const chatArea = document.getElementById("chat-content");

  var prompt = userMessage.value.trim();
  if (prompt === "") {
    return;
  }

  console.log("user message", prompt);

  chatArea.innerHTML += userDiv(prompt);
  userMessage.value = "";
  const aiResponse = await getResponse(prompt);
  let md_text = md().render(aiResponse);
  chatArea.innerHTML += aiDiv(md_text);

  let newUserRole = {
    role: "user",
    parts: prompt,
  };
  let newAIRole = {
    role: "model",
    parts: aiResponse,
  };

  history.push(newUserRole);
  history.push(newAIRole);

  console.log(history);
}

function toggleChat() {
  const header = document.querySelector('.bg-gemRegular');
  const chatContainer = document.getElementById('chat-container');
  const chatForm = document.getElementById('chat-form');

  header.classList.toggle('hidden');
  chatContainer.classList.toggle('hidden');
  chatForm.classList.toggle('hidden');
}

// Set up the event listener for the chat toggle button
const toggleButton = document.getElementById('toggleChatbot');
toggleButton.addEventListener('click', toggleChat);

chatInitializer();

const chatForm = document.getElementById("chat-form");
chatForm.addEventListener("submit", handleSubmit);

chatForm.addEventListener("keyup", (event) => {
  if (event.key === 'Enter') handleSubmit(event);
});








// import { useEffect, useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import md from "markdown-it";

// const Chatbot = () => {
//   const [genAI, setGenAI] = useState(null);
//   const [model, setModel] = useState(null);
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const initModel = async () => {
//       const aiInstance = new GoogleGenerativeAI(process.env.VITE_API_KEY);
//       setGenAI(aiInstance);

//       const aiModel = aiInstance.getGenerativeModel({ model: "gemini-pro" });
//       setModel(aiModel);

//       await chatInitializer(aiModel);
//     };

//     initModel();
//   }, []);

//   const chatInitializer = async (aiModel) => {
//     const systemPrompt =
//       "You are a chatbot on Muhammad Haroon's personal portfolio website. Your job is to greet the user and guide them for what they need.";
    
//     const chat = await aiModel.startChat({ history: [] });
//     const result = await chat.sendMessage(systemPrompt);
//     const response = await result.response;
//     const text = response.text();

//     const newUserRole = {
//       role: "user",
//       parts: systemPrompt,
//     };

//     const newAIRole = {
//       role: "model",
//       parts: text,
//     };

//     setHistory([newUserRole, newAIRole]);
//     console.log(history);
//   };

//   const getResponse = async (prompt) => {
//     const chat = await model.startChat({ history: [] });
//     const result = await chat.sendMessage(prompt);
//     const response = await result.response;
//     const text = response.text();

//     console.log(text);
//     return text;
//   };

//   const userDiv = (data) => {
//     return (
//       <div className="flex items-center gap-2 justify-start">
//         <img src="user.jpg" alt="user icon" className="w-10 h-10 rounded-full" />
//         <p className="bg-gemDeep text-white p-1 rounded-md shadow-md">{data}</p>
//       </div>
//     );
//   };

//   const aiDiv = (data) => {
//     return (
//       <div className="flex gap-2 justify-end">
//         <pre className="bg-gemRegular/40 text-gemDeep p-1 rounded-md shadow-md whitespace-pre-wrap">{data}</pre>
//         <img src="/public/scriptkiddie.png" alt="user icon" className="w-10 h-10 rounded-full" />
//       </div>
//     );
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const userMessage = document.getElementById("prompt");
//     const chatArea = document.getElementById("chat-content");

//     const prompt = userMessage.value.trim();
//     if (prompt === "") {
//       return;
//     }

//     console.log("user message", prompt);

//     const aiResponse = await getResponse(prompt);
//     const mdText = md().render(aiResponse);

//     setHistory((prevHistory) => [
//       ...prevHistory,
//       { role: "user", parts: prompt },
//       { role: "model", parts: aiResponse },
//     ]);

//     userMessage.value = "";
//     console.log(history);
//   };

//   const toggleChat = () => {
//     // Your logic for toggling chat visibility
//     const header = document.querySelector('.bg-gemRegular');
//   const chatContainer = document.getElementById('chat-container');
//   const chatForm = document.getElementById('chat-form');

//   header.classList.toggle('hidden');
//   chatContainer.classList.toggle('hidden');
//   chatForm.classList.toggle('hidden');
//   };

//   return (
//     <div>
//       {/* Your UI here */}
//       <button onClick={toggleChat}>Toggle Chat</button>
//       <form onSubmit={handleSubmit}>
//         <input type="text" id="prompt" />
//         <button type="submit">Submit</button>
//       </form>
//       <div id="chat-content">
//         {/* Render chat history */}
//         {history.map((item, index) => (
//           item.role === 'user' ? userDiv(item.parts) : aiDiv(item.parts)
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
