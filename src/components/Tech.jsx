// Importing from react-icons
import { RiReactjsLine } from "react-icons/ri";  // React
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";  // MongoDB, Express, JavaScript, HTML, CSS, Tailwind
import { FaNodeJs } from "react-icons/fa";  // Node.js
import { CgCPlusPlus } from "react-icons/cg";
import { FaGit} from "react-icons/fa"  // C++


import React from 'react'

function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24" >
        <h2 className="my-20 text-center text-4xl" >Technologies</h2>
        <div className="flex flex-wrap item-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
  <CgCPlusPlus className="text-7xl text-blue-600" /> {/* C++ */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiHtml5 className="text-7xl text-orange-500" /> {/* HTML */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiCss3 className="text-7xl text-blue-500" /> {/* CSS */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiJavascript className="text-7xl text-yellow-500" /> {/* JavaScript */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <RiReactjsLine className="text-7xl text-cyan-500" /> {/* React */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiExpress className="text-7xl text-gray-400" /> {/* Express.js */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
  <FaGit className="text-7xl text-orange-600" /> {/* Git */}
</div>

        </div>
    </div>
  )
}

export default Tech