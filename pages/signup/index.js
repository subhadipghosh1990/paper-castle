
import Image from "next/image"

const Index = () => {
    return(
        <section className="fullHt">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name *" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email *" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password *"  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password *"  required/>
                                </div>
                                

                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-phone"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Mobile No"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-home"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Address"/>
                                </div>

                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"  required/>
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service *</a></label>
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                {/* <img src="images/signup-image.jpg" alt="sing up image"> */}
                                    <Image width={294} height={314} src="/images/signup-image.jpg"/>
                                </figure>
                            <a href="/login" className="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export default Index;