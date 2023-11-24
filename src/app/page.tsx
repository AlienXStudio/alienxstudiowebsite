import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_hero}>
      <header className={styles.header}>
        <div className= {styles.logo}>
          <h1>AlienX <span>Studio</span></h1>
        </div>
        <ul className={styles.nav}>
          <li><a href="#" className={styles.active}>Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className={styles.btn}>Contact Us</button>
      </header>
      

      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1>Grow Your</h1>
          <h1>Business With</h1>
          <h1>Us</h1>
          <p>
            An agency is a business, firm or <br />
             organization that provides services.
          </p>
          <button className={styles.primary_btn}>Get Started</button>
        </div>
        <div className={styles.hero_image}>
          <Image
          src={"./hero.png"}
          alt='alienx hero Image'
          width={600}
          height={600}
          />
        </div>
      </section>
      </div>
      <div className={styles.company}>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>

      <section className={styles.services}>
        <h1>Save time managing you </h1>
        <h1>business with our services</h1>
        <p>We help most exciting brands unlock growth through carefully <br />
        crafted paid media campaigns and digital experiences</p>
        <div className={styles.card_container}>

          <div className={styles.card1}>
          <FontAwesomeIcon icon={faPen} className={styles.design} />
            <h4>Web Design</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quae voluptatum nulla, iure quam.</p>
          </div>

          <div className={styles.card2}>
          <FontAwesomeIcon icon={faCode} className={styles.code} />
          <h4>Development</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quae voluptatum nulla, iure quam.</p>
          </div>

          <div className={styles.card3}>
          <FontAwesomeIcon icon={faBagShopping} className={styles.shopping} />
          <h4>Ecommerce</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quae voluptatum nulla, iure quam.</p>
          </div>

          <div className={styles.card4}>
          <FontAwesomeIcon icon={faGamepad} className={styles.game} />
          <h4>Games</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quae voluptatum nulla, iure quam.</p>
          </div>

        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.experience_image}>
          <Image
          src={"./businessman.png"}
          alt='alienx studio businessman'
          width={600}
          height={607}
          className={styles.businessman_experience}
          />
        </div>
        <div className={styles.experience_content}>
          <h1>Why Us?</h1>

          <div className={styles.years}>
            <span>5+</span>
            <h5>Years of <br />
            Experiences</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci vitae, odit ullam laborum minima corrupti rem repudiandae iure,</p>
          <br /><br />

          <div className={styles.years}>
            <span>86</span>
            <h5>Happy <br />
            Clients</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci vitae, odit ullam laborum minima corrupti rem repudiandae iure, </p>
          <br /><br />

          <div className={styles.years}>
            <span>32+</span>
            <h5>Business <br />
            Partner</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci vitae, odit ullam laborum minima corrupti rem repudiandae iure,</p>
          <br /><br />

        </div>
      </section>

      <section className={styles.home_projects}>
        <div className={styles.project_head_container}>
        <div className={styles.project_head}>
          <h1>See Our Projects</h1>
          <p>Check out the cool work we've done together. Every <br />
          brand is unique with different products, target <br />
          audiences and business goals.</p>
        </div>
        <div className={styles.arrow}>
          <Image
          src={"./arrow.png"}
          alt='arrow'
          height={200}
          width={200}
          />
          </div>
        </div>

        <div className={styles.project_container}>
        <div className={styles.firstproject}>
          <button className={styles.project_catogries}>Web design</button>
          <h1>Web design project <br />
          title goes here</h1>
          <p>We protect you with a customized <br />
          website design thats perfect for your <br />
          business or personal site.</p>

          <button className={styles.full_project}>See Full Proect <FontAwesomeIcon icon={faCircleRight} className={styles.facircle}/> </button>
        </div>
        <div className={styles.design_image}>
          <Image
          src={"./design.png"}
          alt='design'
          height={282}
          width={356}
          className={styles.image_design}
          />
        </div>
        </div>


        <div className={styles.project_container}>
        <div className={styles.design_image}>
          <Image
          src={"./design.png"}
          alt='design'
          height={282}
          width={356}
          className={styles.image_development}
          />
        </div>

        <div className={styles.firstproject}>
          <button className={styles.project_catogries}>Development</button>
          <h1>Web design project <br />
          title goes here</h1>
          <p>We protect you with a customized <br />
          website design thats perfect for your <br />
          business or personal site.</p>

          <button className={styles.full_project}><FontAwesomeIcon icon={faCircleLeft} className={styles.facircle}/> See Full Proect</button>
        </div>
        </div>


        <div className={styles.project_container}>
        <div className={styles.firstproject}>
          <button className={styles.project_catogries}>E-Commerce</button>
          <h1>Web design project <br />
          title goes here</h1>
          <p>We protect you with a customized <br />
          website design thats perfect for your <br />
          business or personal site.</p>

          <button className={styles.full_project}>See Full Proect <FontAwesomeIcon icon={faCircleRight} className={styles.facircle}/> </button>
        </div>
        <div className={styles.design_image}>
          <Image
          src={"./design.png"}
          alt='design'
          height={282}
          width={356}
          className={styles.image_ecommerce}
          />
        </div>
        </div>


        <div className={styles.project_container}>
        <div className={styles.design_image}>
          <Image
          src={"./design.png"}
          alt='design'
          height={282}
          width={356}
          className={styles.image_game}
          />
        </div>

        <div className={styles.firstproject}>
          <button className={styles.project_catogries}>Game Development</button>
          <h1>Web design project <br />
          title goes here</h1>
          <p>We protect you with a customized <br />
          website design thats perfect for your <br />
          business or personal site.</p>

          <button className={styles.full_project}><FontAwesomeIcon icon={faCircleLeft} className={styles.facircle}/> See Full Proect</button>
        </div>
        </div>

<div className={styles.more_projects}>
<button className={styles.primary_btn}>See All Projects</button>
</div>
      </section>

      <section className={styles.team}>
        <h1>Our Powerful Team</h1>
        <div className={styles.team_container}>

          <div className={styles.member1}>
          <FontAwesomeIcon icon={faUser} className={styles.profile1} />
            <h4>Sakar Khadka</h4>
            <p>Founder</p>
          </div>

          <div className={styles.member2}>
          <FontAwesomeIcon icon={faUser} className={styles.profile2} />
          <h4>Sakar Khadka</h4>
            <p>Founder</p>
          </div>

          <div className={styles.member3}>
          <FontAwesomeIcon icon={faUser} className={styles.profile3} />
          <h4>Sakar Khadka</h4>
            <p>Founder</p>
          </div>

          <div className={styles.member4}>
          <FontAwesomeIcon icon={faUser} className={styles.profile4} />
          <h4>Sakar Khadka</h4>
            <p>Founder</p>
          </div>

        </div>
      </section>


      <section className={styles.footer}>
        <div className={styles.footer_design}>
          <div className={styles.first_section}>
            <h1>Alien <span>Studio</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore fuga nulla, eum odit facere debitis, error doloremque placeat voluptas deserunt quisquam cumque cupiditate adipisci repellat aspernatur, vel iusto odio fugit.</p>
          </div>
          <div className={styles.second_section}>
            <ul>
              <a href="#"> <li>Product</li></a>
              <a href="#"> <li>Overview</li></a>
              <a href="#"> <li>Marketplace</li></a>
              <a href="#"> <li>Workers</li></a>
            </ul>
          </div>
          <div className={styles.third_section}>
          <ul>
              <a href="#"> <li>Resources</li></a>
              <a href="#"> <li>Blog</li></a>
              <a href="#"> <li>FAQ</li></a>
              <a href="#"> <li>ROI Calculator</li></a>
            </ul>
          </div>
          <div className={styles.fourth_section}>
            <h1>Subscrive to our newslatter</h1>
            <p>subscribe to get updated</p>
            <input type="email" name="email" id="email" placeholder="Enter your Email"/>
          </div>
        </div>
      </section>
    </main>
  )
}
