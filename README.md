# StudyNook - Your Ultimate Study Space Finder

StudyNook is a modern, full-stack web application designed to help students and professionals find and book the perfect study environment. From searching for rooms with specific amenities to managing bookings, StudyNook makes the process seamless and efficient.

## 🚀 Live Demo

[https://studynook-nu.vercel.app/](https://studynook-nu.vercel.app/)

## 🛠 Features

- **Smart Search:** Find rooms based on name, amenities, and price range.
- **Secure Booking:** JWT-based authentication ensures your data remains safe.
- **Real-time Availability:** Integrated logic to prevent double booking.
- **Booking Management:** Users can manage their bookings, view status, and cancel if needed.
- **Public Statistics:** Real-time booking count display for every room without needing authentication.
- **Owner Dashboard:** A dedicated space for room owners to manage their listings.

## 💻 Tech Stack

**Frontend:**

- Next.js (App Router)
- Tailwind CSS
- HeroUI (Components)
- React Query (Data Fetching)
- React Toastify (Notifications)

**Backend:**

- Node.js & Express.js
- MongoDB (Database)
- JWT (Authentication)
- Jose (Security)

## 🏗 Installation

1. **Clone the repository:**
   ````bash
   git clone [https://github.com/your-username/studynook.git](https://github.com/your-username/studynook.git)
   2. **Install dependencies:**
   ```bash
   cd studynook
   npm install
   MONGODB_URI=your_mongodb_connection_string
   CLIENT_URL=your_frontend_url
   PORT=your_server_port
   npm run dev
   ````
