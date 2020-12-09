import React, { Component } from 'react'

export default class Sibebar extends Component{

  

    render() {
      const pages = ["About","Projects","Skills","Education","Experience","Work","Blog","Contact"];
      const socials = [ 
        {
          'link': "https://twitter.com/valentine_just",
          'icon': "icon-twitter2"
        }, 
        {
          "link": "https://www.linkedin.com/in/justicevessuman/",
          'icon': "icon-linkedin2"
        },
        {
          "link": "https://github.com/Dhruv34788",
          'icon': "icon-github"
        } 
      ];
        
      function Profile(props) {
        return (
            <div className="text-center">
              <div className="author-img" style= {{ backgroundImage: "url(images/man1.jpg)"}}></div>
              <h1 id="colorlib-logo"><a href="index.html">{props.name}</a></h1>
              <span className="position"><a href="#">{props.career} | {props.interest} | {props.sdg} </a><p> in Ghana</p></span>
            </div>
        )
      }

      const NavItems = pages.map(
        (page, index) => 
        <li key={index}>
          <a href="#" data-nav-section = {page.toLowerCase()} >{page}</a>
        </li>
      );

      function ListNavElements(){
        return (
          <ul>
           <li className="active"><a href="#" data-nav-section="home">Home</a></li>
              {NavItems}
            </ul>);
      }

      const Sociallinks = socials.map(
        (medium, index) => 
        <li key={index}>
             <a href={medium.link}  target="_blank" rel="noopener noreferrer"><i className={medium.icon} /></a>
        </li>
      );

      function ListSocialNetworks(props){
        return (
         <ul>
           { Sociallinks }
         </ul>
        )
      };
    
        return (
              <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                  <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                      <Profile name="Justice V. Essuman" career = "Engineer" interest = "EV-Enthusiat" sdg = "SDG-13"/>

                      <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                         <ListNavElements/>
                        </div>
                      </nav>

                      <nav id="colorlib-main-menu">
                        < ListSocialNetworks/>
                      </nav>
                
                      <div className="colorlib-footer">
                        <p><small>
                          <code> While True: I</code> <i className="icon-heart" aria-hidden="true"/><code> God</code>
                          </small> 
                        </p>
                      </div>
                
                  </aside>
              </div>
        );
      }

      
}
