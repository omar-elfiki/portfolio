import React from 'react';
import '../styles/styles.css';
import Image from 'next/image';
import { BrowserRouter as Router} from 'react-router-dom';
import NavigationMenu from '../app/NavigationMenu';

const MobileHome = () => {
    return (
        <Router>
            <NavigationMenu />

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed top-[35px] left-[32px] w-[350px] h-[105px] text-[55px]">
                <b className="absolute top-[0px] left-[15px] inline-block w-[350px] h-[82px]">Omar Elfiki</b>
                <b className="absolute top-[75px] left-[-10px] text-sm font-light inline-block w-[350px] h-[24px]">Computer Science Student - Full Stack Development</b>
            </div>

            <div className="fixed top-[225px] left-[25px] overflow-auto scrollable-section-mobile">
                <div id="about" className="font-normal inline-block w-[350px] h-[46px]">
                    <p className="mb-4">My name is <strong><a href="https://www.linkedin.com/in/omarelfiki" target="_blank" rel="noopener" className="hover-blue">Omar Elfiki</a></strong> and I&apos;m an aspiring undergraduate computer science student at <strong><a href="https://www.maastrichtuniversity.nl/" target="_blank" rel="noopener" className="hover-blue">Maastricht University</a></strong> in Maastricht, The Netherlands.
                        I have a passion for software development and I&apos;m always looking for new opportunities to learn and grow.
                        I have experience in full-stack <strong><a href="https://flutter.dev/" target="_blank" rel="noopener" className="hover-blue">Flutter</a></strong> and <strong><a href="https://dart.dev/" target="_blank" rel="noopener" className="hover-blue">Dart</a></strong> mobile development for all platforms and I&apos;m always looking for new projects to work on.</p>
                    <p className="mb-4">I have also enjoyed training in the cloud computing field with <strong><a href="https://aws.amazon.com/" target="_blank" rel="noopener" className="hover-blue">Amazon Web Services</a></strong> to soon become an AWS Cloud Practicioner certifcation holder.
                        I have worked with Amazon EC2, Amazon S3, AWS Lambda, Amazon RCS, Amazon VPC and much more.</p>
                    <p className="mb-4">When I&apos;m not working on code, I enjoy music, both listening and playing it :) I play the guitar and the piano. I also really enjoy food, all types and cuisines. I&apos;m always open to trying new things and experiences. </p>
                </div>


                <div id="skills" className="font-normal inline-block w-[350px] h-[46px]">
                    <br />
                    <p className="mb-4">I have experience in the following technologies:</p>
                    <ul className="list-disc ml-8">
                        <li>Flutter and Dart for mobile development</li>
                        <li>HTML, CSS, and JavaScript for web development</li>
                        <li>Python for backend development</li>
                        <li>Amazon Web Services for cloud computing</li>
                        <li>Git for version control</li>
                    </ul>
                </div>

                <div id="projects" className="font-normal inline-block w-[350px] h-[46px] text-justify">
                </div>

                <div id="contact" className="font-light inline-block w-[350px] h-[46px]">
                    <p className="mb-4">You can reach me at <strong><a href="mailto:omarelfiki@gmail.com" className="hover-blue">omarelfiki@gmail.com</a></strong> or through the contact box below</p>
                    <form action="https://formspree.io/f/xwkgzlrd" method="POST" className="absolute left-5
                    ">
                        <input type="text" name="name" placeholder="Name" className="w-[300px] h-[46px] mb-4 p-2 rounded border text-black" />
                        <input type="email" name="email" placeholder="Email" className="w-[300px] h-[46px] mb-4 p-2 rounded border text-black" />
                        <textarea name="message" placeholder="Message" className="w-[300px] h-[100px] mb-4 p-2 rounded border text-black"></textarea>
                        <button type="submit" className="w-[300px] h-[46px] bg-blue text-white rounded hover:bg-light-blue transition-colors mt-[-10px]">Submit</button>
                    </form>
                </div>

            </div>

            <div className="fixed top-[150px] left-[117px] grid grid-cols-3 gap-2">
                <div>
                    <a href="https://www.linkedin.com/in/omarelfiki">
                        <div className="relative w-12 h-16 link-container">
                            <div className="link-normal absolute inset-0">
                                <Image
                                    src="/linkedin-hover.png"
                                    alt="LinkedIn"
                                    width={80}
                                    height={64}
                                />
                            </div>
                            <div className="link-hover absolute inset-0">
                                <Image
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    width={80}
                                    height={64}
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div>
                    <div>
                        <a href="https://www.github.com/omar-elfiki">
                            <div className="relative w-12 h-16 link-container">
                                <div className="link-normal absolute inset-0">
                                    <Image
                                        src="/github-hover.png"
                                        alt="github"
                                        width={80}
                                        height={64}
                                    />
                                </div>
                                <div className="link-hover absolute inset-0">
                                    <Image
                                        src="/github.png"
                                        alt="github"
                                        width={80}
                                        height={64}
                                    />
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
                <div>
                    <a href="https://www.instagram.com/_omarelfiki">
                        <div className="relative w-12 h-16 link-container">
                            <div className="link-normal absolute inset-0">
                                <Image
                                    src="/instagram-hover.png"
                                    alt="Instagram"
                                    width={80}
                                    height={64}
                                />
                            </div>
                            <div className="link-hover absolute inset-0">
                                <Image
                                    src="/instagram.png"
                                    alt="instagram"
                                    width={80}
                                    height={64}
                                />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="fixed top-[565px] font-light text-sm text-gray-300 inline-block w-[350px] text-justify ">
                <br />
                <br />
                <p>Designed with <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-white">Figma</a> and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-white">Virtual Studio Code</a>. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-white">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-white">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-white">Vercel</a>.
                    Inspired by Brittany Chiang. Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" className="text-white">Icons8</a>. Form hosted by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-white">Formspree.io</a>. All text is in <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="text-white">Inter</a> typeface.</p>
            </div>
        </main>
        </Router>
    );
};

export default MobileHome;