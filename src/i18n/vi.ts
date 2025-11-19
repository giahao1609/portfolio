export default {
  navbar: {
    home: "Trang chủ",
    projects: "Dự án",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    certificates: "Chứng chỉ",
    contact: "Liên hệ",
    cv: "Xem CV",
    print: "In / PDF",
  },

  hero: {
    name: "Hoàng Gia Hào",
    title: "Lập trình viên Web & AI",

    shortDescription:
      "Xây dựng ứng dụng full-stack với UI hiện đại, định vị và các tính năng AI.",

    description: `
Lập trình viên phần mềm với kinh nghiệm thực chiến trong việc xây dựng ứng dụng full-stack bằng React, TypeScript, Node.js và MongoDB. Tôi đã phát triển nền tảng FoodMap thực tế, tích hợp tìm kiếm theo vị trí, quy trình quản lý nhà hàng, chatbot AI (Live2D + RAG) và xử lý hình ảnh.

Tôi có kinh nghiệm thiết kế REST API mở rộng, xây dựng luồng đăng nhập/xác thực an toàn và phát triển backend theo kiến trúc rõ ràng bằng NestJS. Tôi luôn ưu tiên viết mã sạch, dễ bảo trì và hiệu suất cao dựa trên các nguyên tắc kỹ thuật hiện đại.

Hiện tại, tôi đang mở rộng kỹ năng bằng việc xây dựng trợ lý AI Live2D tương tác, mang lại trải nghiệm giao tiếp tự nhiên và sinh động hơn cho người dùng.
`,

    downloadCV: "Tải CV",
    viewProjects: "Xem dự án",
  },

  skills: {
    title: "Kỹ năng",

    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & DevOps",
      ai: "AI & ML",
    },

    list: {
      frontend: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Vite"],
      backend: ["NestJS", "Node.js", "Express", "Java", "Spring Boot"],
      database: ["MongoDB", "MySQL"],
      tools: ["Git", "Docker", "Postman", "Vercel", "Google Cloud Storage"],
      ai: ["RAG", "ChromaDB", "Embeddings", "Live2D"],
    },
  },

  experience: {
    title: "Kinh nghiệm",

    list: [
      {
        role: "Lập trình viên phần mềm định hướng dự án",
        company: "TP. Hồ Chí Minh, Việt Nam",
        year: "2022 – Nay",
        details: [
          "Phát triển dự án với React, TypeScript, NestJS, MongoDB và Java.",
          "Xây dựng FoodMap với tìm kiếm theo vị trí, quản lý nhà hàng, chatbot AI (Live2D + RAG).",
          "Áp dụng nguyên tắc kỹ thuật phần mềm và kiến trúc sạch cho cả frontend và backend.",
        ],
      },
    ],
  },

  projects: {
    title: "Dự án",

    list: [
      {
        title: "FoodMap – Nền tảng tìm quán ăn & AI gợi ý",
        desc: "Nền tảng full-stack tìm kiếm quán ăn theo vị trí, chatbot AI Live2D, ChromaDB RAG và tích hợp Mapbox.",
        tech: [
          "React",
          "TypeScript",
          "NestJS",
          "MongoDB",
          "Mapbox",
          "Live2D",
          "RAG",
        ],
        link: "https://www.food-map.online/",
        image: "/assets/foodmap.png",
      },

      {
        title: "Website bán thiết bị y tế",
        desc: "Giao diện e-commerce responsive với danh mục sản phẩm, danh sách sản phẩm và tối ưu trải nghiệm mobile.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://giahao1609.github.io/hoanggiahao-21121381/",
        image: "/assets/ecommerce.png",
      },
    ],
  },

  contact: {
  title: "Liên hệ",
  desc: "Nếu bạn có bất kỳ câu hỏi nào, hãy gửi tin nhắn cho tôi!",

  form: {
    fullname: "Họ tên",
    fullname_placeholder: "Nhập họ tên...",
    email: "Email",
    email_placeholder: "Nhập email...",
    message: "Nội dung",
    message_placeholder: "Nhập tin nhắn...",
    submit: "Gửi",
  },

  info_title: "Thông tin liên hệ",
  location: "TP. Hồ Chí Minh"
},
};
