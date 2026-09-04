# Vietnam Wellness Retreat — Website

Website doanh nghiệp cho **Vietnam Wellness Retreat**, xây dựng bằng Next.js 14 (App Router) + TypeScript + Tailwind CSS, hỗ trợ song ngữ VI/EN, SEO on-page + JSON-LD, dựng theo prompt gốc trong `prompt-claude-code-vietnam-wellness-retreat_md.txt`.

## 1. Cài đặt & chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000 — trang chủ sẽ tự chuyển hướng sang `/vi`.

Build production (sẽ tự sinh sitemap.xml + robots.txt qua `next-sitemap`):

```bash
npm run build
npm run start
```

## 2. Cấu trúc thư mục chính

```
messages/vi.json        Toàn bộ nội dung tiếng Việt (trang chủ, dịch vụ, wellness tourism...)
messages/en.json        Bản tiếng Anh tương ứng — cùng cấu trúc key với vi.json
src/lib/site-config.ts  Thông tin thương hiệu, liên hệ, mạng xã hội (dùng chung toàn site)
src/app/[locale]/       Toàn bộ route: /vi/... và /en/...
src/components/         Header, Footer, hiệu ứng FadeIn, JSON-LD, các trang dùng chung
public/images/          Toàn bộ ảnh brand
```

## 3. Cách thay/đổi ảnh

Ảnh nằm trong `public/images/`, được tham chiếu qua đường dẫn `/images/<tên file>.jpg` trong code. Toàn bộ ảnh hiện tại là ảnh **đã được tách/cắt sạch** (không còn chữ hay logo chèn sẵn) từ 7 ảnh marketing gốc do bạn cung cấp, sau đó làm nét lại. 7 ảnh composite gốc được giữ lại (không deploy) tại `reference-originals/` ở gốc project, phòng khi cần cắt lại theo cách khác.

Để thay ảnh:

1. Đặt ảnh mới vào `public/images/`, **giữ nguyên tên file** đang dùng (xem bảng bên dưới) — cách này không cần sửa code.
2. Hoặc đặt tên khác rồi tìm-thay trong `src/app/[locale]/**/page.tsx` và `src/components/pages/*.tsx` (tìm chuỗi `/images/`).

| File hiện tại | Dùng ở đâu |
|---|---|
| `logo-mark-circle.jpg` | Logo header/footer, favicon nguồn |
| `poolside-sunset-clean.jpg` | Hero trang chủ (ảnh nét nhất, độ phân giải cao nhất), ảnh OG mặc định |
| `yoga-karst-mountains.jpg` | Thẻ "Retreat Design & Development" trang chủ |
| `massage-singing-bowls.jpg` | Thẻ "Wellness Program Development" trang chủ |
| `coaching-session.jpg` | Thẻ "Hospitality & Business Consulting" trang chủ |
| `resort-pool-loungers.jpg` | CTA band cuối trang chủ |
| `resort-aerial-pool.jpg` | Hero trang Về chúng tôi |
| `villa-pool-view.jpg` | Hero trang Dịch vụ |
| `deck-meditation-lake.jpg` | Hero trang Wellness Tourism |
| `wellness-wheel-graphic.jpg` | Ảnh minh họa 6 trụ cột trong trang Wellness Tourism |
| `lakeside-meditation.jpg` | Thẻ "Mindful Movement" (Wellness Tourism) |
| `massage-therapy-closeup.jpg` | Thẻ "Holistic Healing" (Wellness Tourism) |
| `healthy-bowl-cuisine.jpg` | Thẻ "Nourishing Cuisine" (Wellness Tourism) |
| `meditation-balcony.jpg` | Thẻ "Nature Immersion" (Wellness Tourism) |
| `spa-stones-towels.jpg` | Thẻ "Personal Growth" (Wellness Tourism) |
| `bedroom-interior.jpg` | Thẻ "Luxury Accommodation" (Wellness Tourism) |
| `halong-daybed-view.jpg` | Hero trang Liên hệ |

**Về độ nét ảnh:** ảnh được giữ nguyên đúng độ phân giải gốc sau khi cắt (không phóng to giả bằng nội suy — làm vậy chỉ gây mờ), chỉ làm nét nhẹ. Ảnh có độ phân giải cao nhất được ưu tiên gán cho những chỗ hiển thị lớn nhất (hero trang chủ); ảnh nhỏ hơn dùng cho các thẻ nhỏ. Next/Image cũng đã được chỉnh `quality={90-92}` (mặc định Next.js chỉ nén ở quality 75) để ảnh ra web sắc nét hơn.

Logo hiện là JPG nền không trong suốt — nếu có bản PNG nền trong suốt, thay `logo-mark-circle.jpg` bằng file đó (giữ tên) để hiển thị đẹp hơn trên nền màu, rồi chạy lại phần tạo favicon (xem ghi chú trong `src/app/favicon.ico`, `icon.png`, `apple-icon.png`).

## 4. Cách cập nhật nội dung đa ngôn ngữ

Toàn bộ văn bản hiển thị nằm trong `messages/vi.json` (tiếng Việt — mặc định) và `messages/en.json` (tiếng Anh). Hai file có **cùng cấu trúc key** — sửa nội dung ở đâu thì sửa đúng key tương ứng ở cả hai file để không bị lệch giữa hai bản ngôn ngữ.

Ví dụ sửa tiêu đề Hero trang chủ: mở `messages/vi.json` → `home.hero.eyebrow`.

Thông tin liên hệ (điện thoại, email, Zalo, Facebook, địa chỉ) không nằm trong file dịch — sửa trực tiếp tại `src/lib/site-config.ts`.

## 5. Domain & SEO

- **Domain chính thức của công ty chưa được chốt tại thời điểm dựng site.** Toàn bộ canonical URL, Open Graph URL và `next-sitemap.config.js` hiện dùng biến môi trường `SITE_URL` (xem `.env.example`), mặc định là một domain placeholder.
- Khi có domain thật: tạo file `.env.local` với `SITE_URL=https://ten-mien-that-cua-ban.com` (không có dấu `/` cuối), hoặc khai báo biến môi trường tương ứng trên Vercel.
- Trang Liên hệ **không có form nhập liệu** — chỉ hiển thị 4 kênh liên hệ trực tiếp dạng icon thương hiệu: gọi điện (tel:), Facebook, Gmail (mở thẳng trang soạn thư trên mail.google.com), Zalo (mở chat zalo.me với cùng số điện thoại). Footer cũng dùng lại đúng 4 icon này cho đồng bộ.
- JSON-LD đã tích hợp: `ProfessionalService` (trang chủ, mọi trang), `Person` (trang Về chúng tôi), `Service` + `FAQPage` (trang Dịch vụ), `Article` (trang Wellness Tourism).
- `next-sitemap` tự sinh `sitemap.xml` + `robots.txt` sau `npm run build`.
- **Trang Dự án đã được gỡ bỏ hoàn toàn** (không còn route `/du-an`, `/projects`, không còn trong menu/footer) theo yêu cầu mới nhất.

## 6. Việc còn cần bổ sung (chưa có trong tài liệu gốc)

- Domain chính thức.
- Ảnh chân dung Founder: theo yêu cầu, hiện **không dùng ảnh** — giữ khối chữ viết tắt "NTT" trong vòng tròn. Có ảnh thật thì thay sau.

## 7. Deploy lên Vercel

1. Đẩy code lên GitHub/GitLab.
2. Vào https://vercel.com → **New Project** → chọn repo.
3. Vercel tự nhận diện Next.js, không cần cấu hình build command thêm.
4. Vào **Settings → Environment Variables**, thêm `SITE_URL` = domain thật (khi có).
5. Deploy. Sau khi có domain, vào **Settings → Domains** để gắn domain chính thức.

## 8. Ghi chú kỹ thuật

- Đa ngôn ngữ triển khai bằng cấu trúc route `/vi/...` và `/en/...` (không dùng thư viện `next-intl`, dùng dictionary JSON tự viết theo đúng phương án B mà prompt gốc cho phép).
- Không dùng form liên hệ / Resend / Formspree theo xác nhận mới nhất — nếu sau này cần thêm form, có thể bổ sung API route riêng.
- Chưa chạy `npm install` / `npm run build` trong môi trường dựng code này (không có kết nối mạng để tải package) — vui lòng chạy `npm install && npm run build` ở máy có mạng để kiểm tra lỗi biên dịch trước khi deploy.
