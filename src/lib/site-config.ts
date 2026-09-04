// Thông tin thương hiệu & liên hệ dùng chung toàn site.
// Cập nhật domain thật khi công ty chốt tên miền chính thức.
export const siteConfig = {
  name: "Vietnam Wellness Retreat",
  // TODO: thay bằng domain chính thức khi có
  url: process.env.SITE_URL || "https://vietnamwellnessretreat.example",
  tagline: "Transform Spaces. Elevate Wellbeing. Inspire Lives.",
  taglineVi: "Kiến tạo không gian. Nâng tầm sự khỏe mạnh. Truyền cảm hứng sống.",
  subSlogan: "Where Wellness Meets Destination Excellence.",
  founder: {
    name: "Nguyễn Thị Thu Trang",
    title: "Wellness Destination Development Consultant",
    quote:
      "Creating destinations that inspire people and create lasting value.",
  },
  contact: {
    address: "Hà Nội | Hoạt động trên toàn Việt Nam",
    phone: "0973 333 102",
    phoneHref: "tel:+84973333102",
    email: "wellnessretreatvietnam@gmail.com",
    // Mở thẳng trang soạn thư trên Gmail web (không dùng mailto:)
    gmailComposeHref:
      "https://mail.google.com/mail/?view=cm&fs=1&to=wellnessretreatvietnam@gmail.com",
    zaloHref: "https://zalo.me/0973333102",
  },
  social: {
    facebook:
      "https://web.facebook.com/p/Vietnam-Wellness-Retreat-61592390697280/",
  },
} as const;
