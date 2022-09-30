import './Login.css';
import { Link } from 'react-router-dom'
import Banner from '../Banner.js'
import Footer from '../Footer.js'

function Login() {
    return (
        <div class="main">
            <Banner></Banner>
            <div class="login_back">
                <div class="login_word">로그인</div>
                <div class="login_box">
                    <form>
                        <div class="login_top">
                            <div class="login_id">
                                <div class="login_id_in">
                                    <input class="login_id_input" name="id" placeholder="아이디를 입력해주세요" type="text" value="">
                                    </input>
                                </div>
                            </div>
                            <div class="login_pass">
                                <div class="login_pass_in">
                                    <input class="login_pass_input" name="password" placeholder="비밀번호를 입력해주세요" type="password" autocomplete="off" value="">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div class="login_mid">
                            <a class="login_mid_txt">아이디 찾기</a>
                            <span class="login_mid_span"></span>
                            <a class="login_mid_txt">비밀번호 찾기</a>
                        </div>
                        <div class="login_bottom">
                            <div class="login_btn" tpye="submit">
                                <span class="login_btn_txt">로그인</span>
                            </div>
                            <div class="signup_btn">
                                <span class="signup_btn_txt">회원가입</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer>
            </Footer>
        </div>
    );
}
export default Login