import React, { useState } from 'react'
import Layout from '../Component/Layout'

const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your signup logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      console.log('Role:', role);
    };
  return (
    <Layout>
       <div className="container mx-auto mt-8 ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-300 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
            required
          />
        </div>>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder='Set your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder='Confirm your password'
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
            required
          >
            <option value="Hiring-Manager">Hiring Manager</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </Layout>
  )
}

export default Signin
