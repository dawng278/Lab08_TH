import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css'; // File CSS tùy chọn của bạn

// Mock data (giả lập dữ liệu phim)
const mockMovies = [
  {
      id: "1",
      title: "Inception",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      description: "Một đạo chích xuất sắc, chuyên đánh cắp những bí mật sâu kín nhất từ tiềm thức của con người trong trạng thái mơ.",
      releaseYear: 2010,
      director: "Christopher Nolan",
      genre: "Sci-Fi, Hành Động",
      rating: 8.8
  },
  {
      id: "2",
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description: "Một nhóm nhà thám hiểm sử dụng một lỗ sâu mới được khám phá để vượt qua giới hạn du hành vũ trụ của con người.",
      releaseYear: 2014,
      director: "Christopher Nolan",
      genre: "Sci-Fi, Phiêu Lưu",
      rating: 8.7
  },
  {
      id: "3",
      title: "The Matrix",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      description: "Một hacker máy tính phát hiện ra bản chất thực sự của thực tại và vai trò của mình trong cuộc chiến chống lại những kẻ điều khiển nó.",
      releaseYear: 1999,
      director: "Lana Wachowski, Lilly Wachowski",
      genre: "Hành Động, Sci-Fi",
      rating: 8.7
  },
  {
      id: "4",
      title: "Avengers: Endgame",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      description: "Sau những sự kiện tàn khốc của Infinity War, vũ trụ chìm trong đống đổ nát. Các Avengers tập hợp lại một lần nữa để đảo ngược hành động của Thanos.",
      releaseYear: 2019,
      director: "Anthony Russo, Joe Russo",
      genre: "Hành Động, Siêu Anh Hùng",
      rating: 8.4
  },
  {
      id: "5",
      title: "Parasite",
      image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      description: "Lòng tham và sự phân biệt giai cấp đe dọa mối quan hệ cộng sinh mới được hình thành giữa gia đình Park giàu có và gia đình Kim nghèo khó.",
      releaseYear: 2019,
      director: "Bong Joon Ho",
      genre: "Tâm Lý, Giật Gân",
      rating: 8.5
  },
  {
      id: "6",
      title: "Spider-Man: Across the Spider-Verse",
      image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      description: "Miles Morales dấn thân vào đa vũ trụ, nơi cậu gặp gỡ một nhóm Người Nhện chịu trách nhiệm bảo vệ sự tồn tại của nó.",
      releaseYear: 2023,
      director: "Joaquim Dos Santos, Kemp Powers",
      genre: "Hoạt Hình, Hành Động",
      rating: 8.7
  }
];

const DetailPage = () => {
    // Lấy tham số id từ URL
    const { id } = useParams();
    
    // Tìm phim tương ứng trong mock data
    const movie = mockMovies.find(m => m.id === id);

    if (!movie) {
        return (
            <div className="error-container">
                <h2>Không tìm thấy bộ phim này!</h2>
                <Link to="/">Quay về trang chủ</Link>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <div className="movie-header">
                <img src={movie.image} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                    <h1>{movie.title} ({movie.releaseYear})</h1>
                    <p><strong>Đạo diễn:</strong> {movie.director}</p>
                    <p className="description">{movie.description}</p>
                    <div className="action-buttons">
                        <button className="btn-play">▶ Xem Phim</button>
                        <Link to="/" className="btn-back">Quay lại</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;