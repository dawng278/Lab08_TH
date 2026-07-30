# BÀI THỰC HÀNH 08

**Chủ đề:** Xây Dựng Website Giới Thiệu Phim Sử Dụng React và Git

## I. Mục tiêu

- **Làm quen với Git và GitHub:** Nắm vững các thao tác cơ bản và quy trình làm việc nhóm với Git.
- **Xây dựng ứng dụng React:** Tạo một ứng dụng React đơn giản có sử dụng React Router để điều hướng giữa các trang.
- **Giải quyết vấn đề thực tế:** Xử lý các tình huống thường gặp khi làm việc nhóm như conflict (xung đột mã nguồn), quản lý nhánh và pull request.

## II. Yêu cầu thực hiện

### Câu 1: Khởi Tạo Dự Án và Cấu Trúc Nhánh

#### Trưởng nhóm (Team Lead) thực hiện

- Tạo một repository mới trên GitHub.
- Khởi tạo một dự án React bằng `create-react-app`.
- Cài đặt `react-router-dom` để quản lý việc điều hướng trang.
- **Quan trọng:** Thiết lập các nhánh theo mô hình Git Flow cơ bản:
  - `main` (hoặc `master`): Nhánh chính, chỉ chứa code đã hoàn thiện và sẵn sàng để "triển khai".
  - `develop`: Nhánh phát triển chính, nơi tích hợp code từ các nhánh tính năng.
- Tạo các file và thư mục cơ bản cho dự án:
  - `components`: Chứa các thành phần giao diện tái sử dụng, ví dụ: `Header`, `Footer`, `MovieCard`.
  - `pages`: Chứa các trang chính của ứng dụng, gồm `HomePage`, `DetailPage`, `AboutPage`.
- Đẩy (push) cấu trúc dự án ban đầu lên cả hai nhánh `main` và `develop` trên GitHub.
- Mời các thành viên trong nhóm vào repository.

#### Các thành viên trong nhóm

- Clone (sao chép) repository về máy tính của mình.
- **Lưu ý:** Tất cả thành viên sẽ làm việc chủ yếu trên nhánh `develop`.

### Câu 2: Phân Chia Công Việc và Phát Triển Tính Năng

Mỗi thành viên (hoặc cặp thành viên) sẽ đảm nhận một tính năng. Mỗi tính năng sẽ được phát triển trên một nhánh riêng (feature branch) được tạo ra từ nhánh `develop`.

#### Gợi ý phân chia công việc

##### Thành viên A — Nhánh `feature/header-footer`

- Tạo và thiết kế giao diện cho Header (có logo và menu điều hướng) và Footer (chứa thông tin cơ bản).
- Tích hợp Header và Footer vào layout chính của ứng dụng.

##### Thành viên B — Nhánh `feature/home-page`

- Tạo trang `HomePage`.
- Tạo một mảng dữ liệu giả (mock data) chứa thông tin về một vài bộ phim, gồm tên phim, hình ảnh và mô tả ngắn.
- Hiển thị danh sách các bộ phim này trên `HomePage`.

##### Thành viên C — Nhánh `feature/about-page`

- Tạo trang `AboutPage`.
- Thiết kế giao diện và hiển thị thông tin giới thiệu về nhóm.

##### Thành viên D — Nhánh `feature/movie-detail`

- Tạo trang `DetailPage`.
- Thiết kế giao diện hiển thị thông tin chi tiết của phim.

### Câu 3: Tích Hợp và Xử Lý Tình Huống

#### Tạo Pull Request

- Sau khi hoàn thành tính năng của mình trên nhánh feature, mỗi thành viên sẽ đẩy (push) nhánh đó lên GitHub.
- Sau đó, tạo một Pull Request (PR) để yêu cầu gộp (merge) nhánh feature của mình vào nhánh `develop`.
- Trong phần mô tả của PR, cần nêu rõ những thay đổi đã thực hiện.

#### Review Code và Merge

- Trưởng nhóm hoặc các thành viên khác sẽ vào xem PR, để lại nhận xét (comment) nếu cần chỉnh sửa.
- Sau khi được duyệt, trưởng nhóm sẽ tiến hành gộp (merge) PR vào nhánh `develop`.

#### Xử Lý Xung Đột (Merge Conflict)

**Tình huống giả lập:** Yêu cầu hai thành viên (ví dụ: A và B) cùng chỉnh sửa một file chung, ví dụ file CSS chính hoặc component `App.js`.

Ví dụ: Thành viên A thêm một đoạn CSS cho Header, trong khi thành viên B cũng thêm một đoạn CSS khác cho `HomePage` ở cùng một dòng trong file `App.css`.

Khi thành viên thứ hai tạo PR, GitHub sẽ báo có conflict.

**Nhiệm vụ:**

1. Thành viên tạo PR phải cập nhật nhánh `develop` mới nhất về máy của mình:

   ```bash
   git pull origin develop
   ```

2. Chuyển sang nhánh feature của mình và thực hiện:

   ```bash
   git merge develop
   ```

3. Git sẽ báo lỗi conflict. Sinh viên cần mở file bị conflict, xem xét và xóa các dấu hiệu:

   ```text
   <<<<<<<
   =======
   >>>>>>>
   ```

   Sau đó chọn giữ lại những thay đổi hợp lý từ cả hai nhánh.

4. Sau khi giải quyết xong, commit thay đổi và đẩy (push) lại lên nhánh feature. PR sẽ tự động được cập nhật.

#### Các Tình Huống Giả Lập Khác

##### Commit nhầm

Một thành viên vô tình commit thiếu file hoặc sai nội dung message.

Sử dụng lệnh sau để sửa lại commit gần nhất:

```bash
git commit --amend
```

##### Lỡ tay commit vào nhánh `develop`

Tạo một nhánh mới từ commit đó, sau đó reset nhánh `develop` về trạng thái cũ:

```bash
git branch new-feature
git reset HEAD~ --hard
git checkout new-feature
```

Trong đó:

- `git branch new-feature`: Tạo nhánh mới từ vị trí hiện tại.
- `git reset HEAD~ --hard`: Quay lại commit trước đó trên `develop`; cần cẩn thận khi sử dụng lệnh này.
- `git checkout new-feature`: Chuyển sang nhánh mới để tiếp tục công việc.

##### Cần lấy một commit từ nhánh khác

Giới thiệu về `git cherry-pick` để lấy một commit cụ thể từ một nhánh khác mà không cần merge cả nhánh.

## III. Hướng dẫn nộp bài và Đánh giá

### 1. Trước khi hết giờ 15 phút, sinh viên phải hoàn thành

- Tạo file Word lưu tên thành viên trong nhóm, bao gồm tên, mã sinh viên và tài khoản sử dụng khi thực hiện thao tác.
- Nộp theo đường dẫn:

  ```text
  N:\#Mã Lớp\Lab8\
  ```

- Đặt tên file theo định dạng:

  ```text
  MSSV_HoTen.doc
  ```

  hoặc:

  ```text
  MSSV_HoTen.docx
  ```

### 2. Kiểm tra trực tiếp

Sinh viên sẽ được gọi ngẫu nhiên để chạy chương trình trên máy và trả lời câu hỏi của giảng viên.

---

**Hết**
