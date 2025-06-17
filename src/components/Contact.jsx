import React from 'react'

export const Contact = () => {

  return (
    <div id="contact" className="min-h-screen w-screen flex flex-col justify-center items-center gap-10 bg-gray-100">
      <h1 className="font-quint text-text-primary text-8xl text-center">Contact</h1>
        <div className="flex-center">
          <form className="max-w-sm w-full flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <input 
                type="text" 
                id="email-address-icon" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com"/>
            </div>
            <label 
              for="message" 
              className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea 
              id="message" 
              rows="6" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Message...">
            </textarea>
            <button 
              type="submit" 
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
          </form>          
        </div>
    </div>
  )
}
