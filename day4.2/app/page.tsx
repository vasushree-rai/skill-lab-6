/*"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function ControlledExample() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setApiError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      setSuccess(true);
      console.log("Form is valid", formData);

    } catch (error) {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border p-2 rounded mb-4 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          className="border p-2 rounded mb-4 w-full"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          className="border p-2 rounded mb-4 w-full"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded mb-4 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 rounded mb-4 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="border p-2 rounded mb-4 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {apiError && <p className="text-red-500 mt-2">{apiError}</p>}
        {success && <p className="text-green-500 mt-2">Success!</p>}
      </form>
    </div>
  );
}
*/

'use client';
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username:string;
  website:string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        setUsers(data);

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } 
      }finally {
          setLoading(false);
        }
    };
    fetchUsers();
   }, []);
  
  if(loading){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-blue-500 text-lg">Loading...</p>
      </div>
    );
  }
    
  if(error){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if(users.length === 0){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No users found.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">\

        <h2 className="text-2xl font-bold mb-4 text-blue-500">User List</h2>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-50 p-4 rounded shadow mb-4">
              <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">{user.website}</p>
              <p className="text-gray-600">{user.id}</p>
              <p className="text-gray-600">{user.username}</p>

            </div>
          ))}
        </div>
      </div>
  );
} 
  