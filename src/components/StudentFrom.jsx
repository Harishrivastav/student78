import axios from "axios";
import { useState } from "react";

export default function StudentRegister() {
  const [form, setForm] = useState({
    name: "",
    className: "",
    age: "",
    marks: "",
    address: "",
    parents: "",
    category: "",
    gender: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if required fields are filled
    if (!form.email || !form.password) {
      alert("Email and Password are required!");
      return;
    }

    // Optional: convert age and marks to numbers to match schema
    const payload = { ...form, age: Number(form.age), marks: Number(form.marks) };

    try {
      const res = await axios.post(
        "https://stdbackend-lg7x.onrender.com/api/student/register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      alert(res.data.msg);
      setForm({
        name: "",
        className: "",
        age: "",
        marks: "",
        address: "",
        parents: "",
        category: "",
        gender: "",
        email: "",
        password: ""
      });
    } catch (err) {
      // Show backend error message
      alert(err.response?.data?.msg || "Server error!");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        {[
          "name",
          "className",
          "age",
          "marks",
          "address",
          "parents",
          "category",
          "gender",
          "email",
          "password"
        ].map((key) => (
          <div key={key} style={{ marginBottom: 10 }}>
            <label>{key}</label>
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              value={form[key]}
              onChange={handleChange}
              required={key === "email" || key === "password"} // make email/password required
              style={{ width: "100%", padding: 6 }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "10px 15px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
          Register Student
        </button>
      </form>
    </div>
  );
}
