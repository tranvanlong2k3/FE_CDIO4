import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {


        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/OASGscJQXp0"
                            title="BookingCare: Hệ thống đặt khám trực tuyến"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                        BookingCare là hệ thống đặt khám trực tuyến thông minh và tiện lợi, giúp kết nối người bệnh với các bác sĩ, phòng khám và bệnh viện hàng đầu. Với giao diện thân thiện và dễ sử dụng, BookingCare cho phép người dùng tìm kiếm, so sánh và lựa chọn dịch vụ y tế phù hợp nhất một cách nhanh chóng. Người dùng có thể xem đánh giá của bệnh nhân trước đó, đặt lịch khám theo khung giờ linh hoạt, và nhận được sự tư vấn chuyên môn từ đội ngũ bác sĩ giàu kinh nghiệm. BookingCare mang đến giải pháp chăm sóc sức khỏe toàn diện, giúp tiết kiệm thời gian và tối ưu hóa trải nghiệm khám chữa bệnh cho người dùng.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
