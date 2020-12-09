import React, {Component} from 'react'

export default class About extends Component{
    render(){
        return(
            <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Me</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
										<p><strong>Hi I'm Justice Essuman</strong> An Electrical and Electronics grad from Ashesi who loves to learn new technologies in his journey to contributing to an exciting and sustainable future.  originally from Takoradi, Ghana, 
										Justice grew up in the "Zongo", Kwesiminstism.  While a student, he has transition from the kid who aspired to just represent his school in the Science and Maths Quiz to 
										a leader, contributing to innovation in Ghana; representing Ghana and being honoured multiple times in the world competitions.</p>
										<p>Justice has over 4 years working experience</p>
										<p>Career interests include Autonomous Systems Engineering- Software Engineering, Renewable Energy, E-Mobility Vehicle Engineering and Industrial internet of Things. A tech-ethusiast with the passion for Robotics</p>
										<p>Hands-on expereince in designing Ubiquitous Smart Systems and EV level 2 Charging; incluisve of the design and building commissioning of Internet of Things applications for Energy Monitroing 
											and Farming Irrigation Systems</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1 card text-white bg-dark mb-3">
										<span className="icon2"><i> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cpu-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3zm0 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
											</svg></i>
										</span>
										<h3>Software Engineering</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Design Thinking</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
											</svg></i></span>
										<h3>Investor</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4 card text-white bg-dark mb-3 ">
										<span className="icon2"><i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-controller" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" d="M11.119 2.693c.904.19 1.75.495 2.235.98.407.408.779 1.05 1.094 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.815-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773a11.307 11.307 0 0 1-.739-.809c-.126-.147-.25-.291-.368-.422-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.422-.243.283-.494.576-.739.81-.398.378-.877.705-1.513.772a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772.486-.485 1.331-.79 2.235-.98.932-.196 2.03-.292 3.119-.292 1.089 0 2.187.096 3.119.292zm-6.032.979c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.505C4.861 9.97 5.978 9.026 8 9.026s3.139.943 3.965 1.855c.164.182.307.35.44.505.214.25.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
											<path d="M11.5 6.026a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-7-2.5h1v3h-1v-3z"/>
											<path d="M3.5 6.526h3v1h-3v-1zM3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .258.966l-1.932.518a.5.5 0 0 1-.612-.354zm9.976 0a.5.5 0 0 0-.353-.613l-1.932-.518a.5.5 0 1 0-.259.966l1.932.518a.5.5 0 0 0 .612-.354z"/>
											</svg></i></span>
										<h3>Electrical Engineering</h3>
									</div>
								</div>
							</div>
							{/* <div className="row">
								<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
									<div className="hire">
										<h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>
										<a href="#" className="btn-hire">Hire me</a>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>

        )
    }
}