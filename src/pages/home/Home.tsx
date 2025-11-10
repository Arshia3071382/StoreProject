import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // وقتی صفحه لود میشه، وضعیت ورود از localStorage بخون
  useEffect(() => {
    const savedUser = localStorage.getItem("userName");
    if (savedUser) {
      setIsLogin(true);
    }
  }, []);

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // دریافت تمام کاربران از دیتابیس
      const res = await axios.get(
        "https://store-20695-default-rtdb.firebaseio.com/users.json"
      );

      const users = res.data ? Object.values(res.data) : [];

      // بررسی اینکه کاربر وجود داره یا نه
      const existingUser = users.find(
        (u: any) => u.userName === userName && u.passWord === passWord
      );

      if (existingUser) {
        // کاربر موجوده  لاگین موفق
        localStorage.setItem("userName", userName);
        setIsLogin(true);
        navigate("/card");
      } else {
        // اگر وجود نداره، ثبت‌نام کن
        await axios.post(
          "https://store-20695-default-rtdb.firebaseio.com/users.json",
          {
            id: Math.random(),
            userName: userName,
            passWord: passWord,
          }
        );

        localStorage.setItem("userName", userName);
        setIsLogin(true);
        navigate("/card");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setIsLogin(false);
  };

  return (
    <div>
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen">
          {isLogin ? (
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-green-600 font-bold text-3xl"> youre welcome {userName} 👋</h1>
              <Button variant="danger" onClick={handleLogout}>
                Exit
              </Button>
             
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="py-10 bg-white gap-8 flex justify-center items-center flex-col rounded-2xl shadow-2xl w-96"
            >
              <h1 className="text-4xl font-bold">Sign in / Log in </h1>

              <div className="flex flex-col gap-3 w-80">
                <label className="font-bold text-xl" htmlFor="userName">
                  username 
                </label>
                <input
                  value={userName}
                  onChange={handleChangeUserName}
                  className="bg-gray-300 rounded px-4 py-2 w-full"
                  type="text"
                  placeholder="Arshia"
                />
              </div>

              <div className="flex flex-col gap-3 w-80">
                <label className="font-bold text-xl" htmlFor="password">
                   password
                </label>
                <input
                  value={passWord}
                  onChange={handleChangePassword}
                  className="bg-gray-300 rounded px-4 py-2 w-full"
                  type="password"
                />
              </div>
          

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button variant="primary">Sign in /Log in</Button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
