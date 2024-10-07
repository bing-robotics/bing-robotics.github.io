import React from 'react';
import './App.css';
import logo from './assets/logo1.jpeg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Binghamton University Logo" />
                <h1>ROBOTICS SEMINAR</h1>
                <nav>
                  <ul>
                    <li><a href="#upcoming-talks">UPCOMING TALKS</a></li>
                    <li><a href="#past-talks">PAST TALKS</a></li>
                    <li><a href="#archive">ARCHIVE</a></li>
                  </ul>
                </nav>
            </header>
            <main>
            <section className="talks-section">
                    <div className="upcoming-talks" id="upcoming-talks">
                        <h2>Upcoming Talks</h2>
                        {/* New Talk Entry for Shiming Fang*/}
                        <div className="talk">
                            <div className="talk-details">
                                <div className="talk-time">
                                    <p> Wednesday, October 16, 2024, 11:00 AM, EB P03 |</p>
                                </div>
                                <div className="talk-abstract">
                                    <h3>Shiming Fang</h3>
                                    <p>
                                        <strong>Title:</strong> 
                                        <span className="normal-text"> Fine-Tuning Hybrid Physics-Informed Neural Networks for Vehicle Dynamics Model Estimation</span>
                                    </p>
                                    <p><strong>Abstract:</strong> Accurate dynamic modeling is critical for autonomous racing vehicles, especially during high-speed and agile maneuvers where precise motion prediction is essential for safety. Traditional parameter estimation methods face limitations such as reliance on initial   guesses,   labor-intensive  fitting  procedures, and complex testing setups. On the other hand, purely data-driven machine learning methods struggle to capture inherent physical constraints and typically require large datasets for optimal performance. To address these challenges,   we introduce the Fine-Tuning Hybrid Dynamics   (FTHD)   method,   which   integrates   supervised   and unsupervised   Physics-Informed   Neural   Networks   (PINNs), combining  physics-based modeling with data-driven techniques. FTHD fine-tunes a pre-trained Deep Dynamics Model (DDM) using a smaller training dataset, delivering superior performance compared to state-of-the-art methods such as the Deep Pacejka Model (DPM) and outperforming the original DDM. Furthermore, an Extended Kalman Filter (EKF) is embedded within FTHD (EKF-FTHD) to effectively   manage   noisy   real-world   data,   ensuring   accurate denoising   while   preserving   the   vehicle's   essential   physical characteristics. The proposed FTHD framework is validated through scaled simulations using the BayesRace Physics-based Simulator and full-scale   real-world   experiments   from   the   Indy   Autonomous Challenge.   Results   demonstrate   that   the   hybrid   approach significantly improves parameter estimation accuracy, even with reduced   data,   and   outperforms   existing   models.   EKF-FTHD enhances robustness by denoising real-world data while maintaining physical insights, representing a notable advancement in vehicle dynamics modeling for high-speed autonomous racing.</p>
                                    <p><strong>Bio:</strong> Shiming Fang received the B.S. degree in Mechanical Engineering from Wuhan University of Technology, Wuhan, China in 2016, and the M.S. degree in Mechanical Engineering from University of Birmingham, Birmingham, UK in 2017. He is currently working towards a Ph.D. degree in Mechanical Engineering at Binghamton University. His current research focuses on autonomous vehicle modeling, robust control, and artificial intelligence in autonomous driving. </p>
                                </div>
                            </div>
                        </div>
                        {/* New Talk Entry for Stephanie Jesso*/}
                        <div className="talk">
                            <div className="talk-details">
                                <div className="talk-time">
                                    <p> Wednesday, October 23, 2024, 11:00 AM, To be decided |</p>
                                </div>
                                <div className="talk-abstract">
                                    <h3>Stephanie Jesso</h3>
                                    <p>
                                        <strong>Title:</strong> 
                                        <span className="normal-text"> On the potential for human-centered, cognitively inspired AI for autonomous robotics in healthcare: a respectful critique</span>
                                    </p>
                                    <p><strong>Abstract:</strong> Historically, the fields of computer science, cognitive science, and neuroscience have been tightly linked. To date, this collaboration has yielded major advances in how the brain and mind are understood, as well as the ways in which artificial minds can be constructed to serve as new collaborators to humans. Yet there are still significant gaps between the capabilities of state-of-the-art autonomous robots and the expectations developed by real users who are now encountering autonomous robots on the job. Human-centered design and human factors research can help to bridge these gaps to create safe, effective, and desirable human-robot systems.</p>
                                    <p>In this talk, I will discuss how human minds compare to current-state AI systems, and how insights from human cognition can be used to create more efficient and capable autonomous robots. I will also present a case study of an evaluation conducted on two autonomous robots intended to aid nurses within hospital settings: Moxi and TUG. Both cobots were originally considered for procurement by our collaborating healthcare system, UHS, at which time our team discovered a lack of evidence on either platform in academic literature. This led us to analyze user comments on social media, which elucidated common struggles within real-world environments. In order to improve the fit of autonomous robots into human environments, collaborative research must be conducted and evidence must be shared. Hope to see you there! </p>
                                    <p><strong>Relevant Papers:</strong></p>
                                    <p><a href="https://www.researchgate.net/publication/380014080_On_the_potential_for_human-centered_cognitively_inspired_AI_to_bridge_the_gap_between_optimism_and_reality_for_autonomous_robotics_in_healthcare_a_respectful_critique"> Feel free to check out our conference proceedings paper</a>!</p>
                                    <p><strong>Bio:</strong> Shiming Fang received the B.S. degree in Mechanical Engineering from Wuhan University of Technology, Wuhan, China in 2016, and the M.S. degree in Mechanical Engineering from University of Birmingham, Birmingham, UK in 2017. He is currently working towards a Ph.D. degree in Mechanical Engineering at Binghamton University. His current research focuses on autonomous vehicle modeling, robust control, and artificial intelligence in autonomous driving. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="past-talks" id="past-talks">
                        <h2>Past Talks</h2>
                        <div className="talk">
                            <div className="talk-details">
                                <div className="talk-time">
                                    <p> Friday, September 13, 2024, 12:00 PM, Engineering Building, T1 |</p>
                                </div>
                                <div className="talk-abstract">
                                    <h3>Zain Nasir</h3>
                                    <p>
                                        <strong>Title:</strong> 
                                        <span className="normal-text"> NetSLAM: Network-Aware Path Planning for Edge-Assisted UAV Swarms</span>
                                    </p>
                                    <p><strong>Abstract:</strong> Mapping and Localization in large environments is becoming increasingly important for autonomous UAV swarms. UAV swarms solving problems in disaster response, infrastructure inspection, and agriculture rely on fresh and accurate maps to make navigation decisions. SLAM methods are capable of providing highly accurate maps through visual information, but are computationally heavy and ill-suited for unmanned aerial vehicles. For this reason, UAV swarms often dedicate one or more drones to frequent mapping, while other drones use map information for planning and trajectory generation. UAV swarms also centralize heavy-weight workloads like AI inference and SLAM map combination at the edge to extend UAV battery lives at the expense of network availability. Both map sharing and offloading necessitate high network bandwidth, but few SLAM or planning approaches account for this. We present NetSLAM, a network-assisted SLAM and planning system that builds environmental maps and UAV trajectories that meet quality of service requirements. NetSLAM embeds network information into SLAM maps so planning can compensate for changes in network connectivity across the environment. We also present NetPlan, a path planning algorithm which utilizes NetSLAM maps to build trajectories that maintain network connectivity requirements to maximize performance. Through real-world experiments and simulation, we show that NetSLAM maps network environments with limited additional overhead compared to existing SLAM approaches, while improving offloading performance significantly when multi-agent swarms consider network availability.</p>
                                    <p><strong>Bio:</strong> I am an incoming software developer and researcher at Memorial Sloan Kettering currently completing my Masters in Computer Science (AI Track) from Binghamton University. My expertise includes autonomous navigation systems in drones, computer vision, and machine learning. My current research involves optimizing edge-based SLAM techniques and tailoring them for deployment on small drones with limited compute power.</p>
                                </div>
                            </div>
                        </div>
                        <div className="talk-notes">
                            <p>This Bing-Robotics talk is also part of the SoC Seminar Series, jointly hosted by Profs. KD Kang and William Hallahan.</p>
                        </div>
                        {/* New Talk Entry for David DeFazio */}
                        <div className="talk">
                            <div className="talk-details">
                                <div className="talk-time">
                                    <p>Friday, August 30, 2024, 12:00 PM, Fountain Room (Smart Energy Building, ITC), Side A |</p>
                                </div>
                                <div className="talk-abstract">
                                    <h3>David DeFazio</h3>
                                    <p>
                                        <strong>Title:</strong> 
                                        <span className="normal-text"> Legged Locomotion and Collaborative Decision Making in Human-Robot Teams</span>
                                    </p>
                                    <p><strong>Abstract:</strong> Legged robots are of great interest to the robotics community, due to their capacity for agile movements and robust locomotion in challenging environments. Several methods exist to enable locomotion and navigation capabilities for legged robots, however these methods generally do not leverage human domain knowledge or support direct interactions with people for collaborative decision making. In this talk, I will present a human-in-the-loop approach for both locomotion gait design and guided navigation. Each approach has been deployed on hardware, showcasing diverse locomotion gaits, and guided navigation for the visually impaired.</p>
                                    <p><strong>Bio:</strong> </p>
                                </div>
                            </div>
                        </div>
                        <div className="talk-notes">
                            <p>Prof. Kaiyan Yu will offer a lab tour for all who are interested after the seminar talk.</p>
                        </div>
                    </div>
                    <div className="archive" id="archive">
                        <h2>Archive</h2>
                        <p>Access archives of past talks and events.</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Binghamton University State University of New York</p>
            </footer>
        </div>
    );
}

export default App;
