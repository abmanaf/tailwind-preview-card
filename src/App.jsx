import React from 'react'

function App() {
  return (
    <div className='border border-slate-800 shadow-slate-700 flex-col items-center justify-center rounded-2xl drop-shadow-initialCustom hover:drop-shadow-custom transition ease-in-out duration-100 p-5 bg-white '>
      <img className='max-w-full text-center rounded-xl' src="/assets/images/illustration-article.svg" alt="illustration-article" />
      <button className='bg-yellow-300 mt-6 py-1 px-3 font-bold rounded-lg'>Learning</button>
      <p className='my-3'>Publishing 21 Dec 2023</p>
      <div>
        <h1>HTML & CSS foundations</h1>
        <p>These language are the backbone of every <br/> website, defining structure, content and <br/> presentation.</p>
      </div>
      <div className='mt-5 flex items-center gap-3'>
        <img src="/assets/images/image-avatar.webp" alt="image-avatar" />
        <span className='font-bold text-md'>Greg Hooper</span>
      </div>
    </div>
  )
}

export default App