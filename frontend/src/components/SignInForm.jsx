import React from 'react'

const SignInForm = () => {
  return (
    <div className='bg-brand-primary drop-shadow-lg w-96 h-96 mx-auto mt-40 flex flex-col text-center text-white rounded-lg'>
      <h1 className='text-5xl font-bold mt-'>sign in</h1>
      <p>don't have an account already? <span>create one</span></p>

      <form action="">

        <input className='' type="email" id="email" />

        <input className='' type="password" id="password" />

        <button type="submit">sign in</button>
        <p>forgot your password? <span>reset it</span></p>

      </form>

    </div>
  )
}

export default SignInForm