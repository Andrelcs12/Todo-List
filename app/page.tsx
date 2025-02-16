"use client"
import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Tarefas = {
  id: number,
  texto: string;
}

export default function Home() {

  const [tarefa, setTarefa] = useState<string>("")
  const [tarefas, setTarefas] = useState<Tarefas[]>([])

  function Adicionar_tarefas() {
    if (tarefa.trim() === "") {
      alert("Por favor, insira uma tarefa!");
      return;
    }    

    setTarefas((prev) => [...prev, { id: Date.now(), texto: tarefa }]);
    setTarefa(""); 
  }
  return (
    <div className="flex justify-center min-h-screen mt-20 px-4">

      <div className="flex flex-col border-2 p-4 w-full max-w-lg rounded-xl mb-40 bg-white shadow-lg">

        <div className="w-full">
          <h1 className="text-center font-bold text-2xl sm:text-3xl mb-4">Lista de Tarefas</h1>
          <div className="flex flex-col sm:flex-row items-center border rounded-lg p-2 shadow-md bg-white gap-2">
  <input 
    value={tarefa} 
    type="text" 
    onChange={(e) => setTarefa(e.target.value)} 
    placeholder="Digite sua tarefa" 
    className="flex-1 px-4 py-2 border rounded-lg placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <button 
    onClick={Adicionar_tarefas} 
    className="bg-gradient-to-br from-purple-800 to-blue-400 px-6 py-2 rounded-lg font-semibold text-white hover:scale-105 hover:shadow-lg transition-transform"
  >
    Adicionar
  </button>
</div>

        </div>

        <ul className="gap-2 flex flex-col mt-4">
          {tarefas.map((item) => (
            <li key={item.id} className="w-full border rounded-lg p-2 shadow-md bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <input 
                type="text" 
                placeholder={item.texto} 
                className="flex-1 px-2 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500 text-gray-800"
              />
              <button 
                onClick={() => setTarefas((prev) => prev.filter((t) => t.id != item.id))} 
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all"
              >
                Deletar
              </button>
            </div>
          </li>   
          ))}
        </ul>
      </div>

      <footer className="w-full fixed bottom-0">
        <div className="bg-black text-white p-4 border-t-2 border-gray-600">
          <h1 className="text-center font-bold text-2xl">@DESENVOLVIDO POR ANDRÉ LUCAS</h1>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://www.instagram.com/andrelucas___/"    
              className="hover:scale-110 transition-transform">
              <IoLogoInstagram size={28} />
            </a>
            <a href="https://github.com/Andrelcs12"  
              className="hover:scale-110 transition-transform">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/andrelucasdev" 
              className="hover:scale-110 transition-transform">
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
