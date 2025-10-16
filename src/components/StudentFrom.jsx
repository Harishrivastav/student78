import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "reactstrap";

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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/student/register",
        form,
        { headers: { "Content-Type": "application/json" } }
      );
      alert(res.data.msg);
      // Reset form after success
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
      alert(err.response?.data?.msg || "Error registering student");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: 500 }}>
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
          <div key={key} className="mb-3">
            <label className="form-label">{key}</label>
            <input
              name={key}
              type={key === "password" ? "password" : "text"}
              value={form[key]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">
          Register Student
        </button>
      </form>
    </Container>
  );
}
