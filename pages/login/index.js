
import Image from "next/image"
import Link from "next/link"

const Index = () => {
    return(
        <section className="fullHt">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure>
                                {/* <img src="images/signin-image.jpg" alt="sing up image"/> */}
                                <Image width={300} height={357} src="/images/signin-image.jpg"/>
                            </figure>
                            <Link href="/signup"><a className="signup-image-link">Create an account</a></Link>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><Link href="#"><a><i className="display-flex-center zmdi zmdi-facebook"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="display-flex-center zmdi zmdi-twitter"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="display-flex-center zmdi zmdi-google"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export default Index;