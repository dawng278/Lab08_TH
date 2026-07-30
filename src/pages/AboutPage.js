import './AboutPage.css';

const members = [
  {
    name: 'Trịnh Hải Đăng',
    role: 'Trưởng nhóm & Làm Nhánh feature/header-footer',
    number: '01',
    studentId: '2311560117',
    description: 'Phụ trách định hướng sản phẩm, xây dựng Header và kết nối các thành phần của website.',
  },
  {
    name: 'Đặng Vỹ Hào',
    role: 'Làm Nhánh feature/home-page',
    number: '02',
    studentId: '2311555394',
    description: 'Xây dựng Home Page, hệ thống màu sắc và bố cục mang đậm chất điện ảnh.',
  },
  {
    name: 'Nguyễn Tấn Thuận',
    role: 'Làm Nhánh feature/about-page',
    number: '03',
    studentId: '2311554901',
    description: 'Thiết kế giao diện About Page, tạo trải nghiệm người dùng và tối ưu hóa hiệu suất.',
  },
  {
    name: 'Nguyễn Tấn Yên',
    role: 'Làm Nhánh feature/movie-detail',
    number: '04',
    studentId: '2311554908',
    description: 'Thiết kế giao diện Movie Detail Page, tối ưu hóa trải nghiệm người dùng và tích hợp dữ liệu phim.',
  },
];

const features = [
  { icon: '⌕', title: 'Khám phá dễ dàng', text: 'Tìm kiếm và khám phá những bộ phim phù hợp với sở thích.' },
  { icon: '☆', title: 'Nội dung chọn lọc', text: 'Thông tin phim được trình bày rõ ràng, trực quan và hữu ích.' },
  { icon: '▶', title: 'Trải nghiệm điện ảnh', text: 'Giao diện hiện đại, tối ưu trên cả máy tính và thiết bị di động.' },
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__glow" aria-hidden="true" />
        <div className="about-container about-hero__content">
          <span className="about-eyebrow">CÂU CHUYỆN CỦA CHÚNG MÌNH</span>
          <h2>
            Kết nối mọi người bằng
            <span> tình yêu điện ảnh.</span>
          </h2>
          <p>
            Chúng mình là một nhóm gồm 4 thành viên cùng chung niềm đam mê với phim ảnh
            và công nghệ. Movie App được tạo ra để giúp bạn tìm thấy bộ phim tiếp theo
            đáng để thưởng thức.
          </p>
          <a className="about-hero__button" href="#our-team">
            Gặp gỡ đội ngũ <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container about-story__grid">
          <div className="about-story__visual" aria-hidden="true">
            <div className="film-frame film-frame--one">
              <span>MOVIE</span>
              <strong>STORIES</strong>
            </div>
            <div className="film-frame film-frame--two">
              <span>4 MEMBERS</span>
              <strong>1 PASSION</strong>
            </div>
          </div>
          <div className="about-story__content">
            <span className="about-section-number">01 / VỀ DỰ ÁN</span>
            <h3>Mỗi bộ phim là một hành trình đáng nhớ</h3>
            <p>
              Movie App là dự án website phim được xây dựng với mục tiêu tạo nên một
              không gian khám phá điện ảnh đơn giản, đẹp mắt và thân thiện.
            </p>
            <p>
              Từ những tựa phim kinh điển đến các tác phẩm mới, chúng mình mong muốn
              giúp người xem nhanh chóng tiếp cận thông tin và tìm được câu chuyện phù
              hợp với cảm xúc của mình.
            </p>
            <div className="about-stats">
              <div><strong>04</strong><span>Thành viên</span></div>
              <div><strong>01</strong><span>Niềm đam mê</span></div>
              <div><strong>∞</strong><span>Câu chuyện</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-section-number">02 / ĐIỀU CHÚNG MÌNH HƯỚNG ĐẾN</span>
            <h3>Trải nghiệm xem phim bắt đầu từ sự lựa chọn tốt</h3>
          </div>
          <div className="about-feature-grid">
            {features.map((feature) => (
              <article className="about-feature" key={feature.title}>
                <span className="about-feature__icon" aria-hidden="true">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team" id="our-team">
        <div className="about-container">
          <div className="about-heading">
            <span className="about-section-number">03 / ĐỘI NGŨ</span>
            <h3>Bốn cá tính, một mục tiêu chung</h3>
            <p>Mỗi thành viên đóng góp một thế mạnh riêng để cùng hoàn thiện Movie App.</p>
          </div>
          <div className="about-team__grid">
            {members.map((member) => (
              <article className="member-card" key={member.studentId}>
                <div className="member-card__avatar">
                  <span>{member.number}</span>
                  <div className="member-card__ring" aria-hidden="true" />
                </div>
                <div className="member-card__info">
                  <span className="member-card__role">{member.role}</span>
                  <h4>{member.name}</h4>
                  <span className="member-card__student-id">MSSV: {member.studentId}</span>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="about-container">
          <span aria-hidden="true">“</span>
          <blockquote>
            Phim ảnh không chỉ để xem — đó là cách chúng ta cảm nhận, kết nối và lưu giữ
            những câu chuyện.
          </blockquote>
          <p>— MOVIE APP TEAM</p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
