import MovieCard from '../components/MovieCard';
import './HomePage.css';

const movies = [
  {
    id: 1,
    title: 'Thành Phố Trong Mơ',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    description:
      'Một kiến trúc sư trẻ bước vào thế giới giấc mơ để tìm lại ký ức đã mất.',
  },
  {
    id: 2,
    title: 'Tín Hiệu Từ Vì Sao',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
    description:
      'Nhóm phi hành gia nhận được một tín hiệu bí ẩn trong chuyến thám hiểm không gian.',
  },
  {
    id: 3,
    title: 'Mùa Hè Cuối Cùng',
    image:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    description:
      'Bốn người bạn cùng nhau hoàn thành danh sách ước mơ trước ngày tốt nghiệp.',
  },
  {
    id: 4,
    title: 'Bí Mật Sau Ống Kính',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    description:
      'Một nữ phóng viên tình cờ ghi lại manh mối của vụ án chưa từng được giải đáp.',
  },
  {
    id: 5,
    title: 'Khung Hình Bị Lãng Quên',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    description:
      'Cuộn phim cũ đưa người thợ ảnh trở về những khoảnh khắc quan trọng của gia đình.',
  },
  {
    id: 6,
    title: 'Ánh Sáng Cuối Rạp',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    description:
      'Người chủ rạp phim lâu đời quyết tâm tổ chức suất chiếu đáng nhớ nhất thị trấn.',
  },
];

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__intro" aria-labelledby="movie-list-title">
        <p className="home-page__eyebrow">Khám phá điện ảnh</p>
        <h2 id="movie-list-title">Home Page - Phim nổi bật</h2>
        <p className="home-page__description">
          Những câu chuyện hấp dẫn được tuyển chọn dành cho bạn.
        </p>
      </section>

      <section className="movie-list" aria-label="Danh sách phim">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
