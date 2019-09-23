import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'detailbox',
  templateUrl: './detailbox.component.html',
  styleUrls: ['./detailbox.component.css'],
})
export class DetailBoxComponent implements OnInit {
  @Input() detailtype: string;
  content: string;
  ngOnInit() {
    this.content = "";
    switch (this.detailtype) {
      case "overview":
        this.content += "<h2>Sheridan Thirsk</h2><br/>\n";
        this.content += "Experienced Engineer, Avid Learner<br/>\n";
        this.content += "Pursuing all fields in engineering<br/>\n";
        this.content += "<a href='resume.pdf'>Resume PDF</a><br/>\n";
        break;
      case "skills":
        this.content += "• Experienced in AI and game development heavily using C++, C#<br/>\n";
        this.content += "• Shipped products on PC, PS4, X360, PS3, Wii, PSP, PS2, iOS, Android<br/>\n";
        this.content += "• Trained in engineering methodology: project management, risk assessment, disciplined pursuit of quality<br/>\n";
        this.content += "• Strong in matrix math, calculus, dynamic physics, multithreading, and shaders<br/>\n";
        this.content += "• Focused on physics and gameplay mechanics with flexibility for iteration Designed many system architectures<br/>\n";
        this.content += "• Affinity in leadership, mentorship and personnel management<br/>\n";
        break;

      case "education":

        this.content += "<strong>Masters of Science, Computer Science</strong><em>  - University of Washington</em><br/>\n";
        this.content += "<em>2017 - 2019</em>, Seattle, WA, USA<br/>\n";
        this.content += "Machine Learning, Natual Language<br/>\n";
        this.content += "<strong>Bachelors of Science, Software Engineering with Internship</strong><em>  - University of Calgary</em><br/>\n";
        this.content += "2002 - 2007, Calgary, AB, Canada<br/>\n";
        this.content += "Mechanics, Calculus, Signals, Embedded System, Web Development, Gesture VR<br/>\n";
        break;

      case "workhsl":
        this.content += "<strong>AI Engineer</strong>\n";
        this.content += "<em>August 2016 - PRESENT</em>, Seattle, WA, USA<br/>\n";
        this.content += "Developed Vampire the Masquerade Bloodlines 2<br/>\n";
        this.content += "• Mentored handful of Junior Engineers focusing on the basics of real-time AI <br/>\n";
        this.content += "• 3D world scanning to build traversal links for hurdling, climbing and falling <br/>\n";
        this.content += "• Thin goal planning agents which chain actions, each requiring and fulfilling different criteria <br/>\n";
        this.content += "• Parallel nested task execution flows for run-time agents. <br/>\n";
        this.content += "• Fast world sampling to determine good combat placement. <br/>\n";
        break;
      case "workhbs":
        this.content += "<strong>Software Engineer</strong>\n";
        this.content += "<em>September 2012 - August 2016</em>, Kirkland, WA, USA<br/>\n";
        this.content += "Developed Shadowrun Returns series<br/>\n";
        this.content += "• Implemented C# core architecture including pathfinding, bitwise collision, and critical loop <br/>\n";
        this.content += "• Used many patterns including queued state machine, commands and custom A* <br/>\n";
        this.content += "• Wrote custom high level ai script language <br/>\n";
        break;

      case "workthree":
        this.content += "<strong>Software Engineer Contract</strong>\n";
        this.content += "<em>September 2012 - August 2016</em>, Kirkland, WA, USA<br/>\n";
        this.content += "Developed Halo 4<br/>\n";
        this.content += "• Implemented some of the code for front end screens and components <br/>\n";
        this.content += "• Fixed many C++ bugs in UI, network, error handling, certification requirements and system callbacks <br/>\n";
        this.content += "• Used C# to add features to the designer tool for faster workflow and ease-of-use <br/>\n";
        break;

      case "worksmith":
        this.content += "<strong>Software Engineer</strong>\n";
        this.content += "<em>January 2012 - April 2012</em>, Seattle, WA, USA<br/>\n";
        this.content += "Developed unreleased third person shooter for iOS <br/>\n";
        this.content += "• Implemented cover-to-cover movement like TimeCrisis light gun style <br/>\n";
        this.content += "• Wrote scalable AI to allow up to 100 AI with memory and load brain activity <br/>\n";
        this.content += "Developed Nanovor and Marvel Kapow for iOS <br/>\n";
        this.content += "• Implemented some UI screens and scaling for different resolutions  <br/>\n";
        this.content += "• Various fixes and hooks into file storage, facebook, and email <br/>\n";
        break;

      case "workbang":
        this.content += "<strong>Software Engineer</strong>\n";
        this.content += "<em>September 2009 - January 2012</em>, Phoenix, AZ and Seattle, WA, USA<br/>\n";
        this.content += "Developed Pirate's Plunder, 6 player pirate game for Free Realms MMO. <br/>\n";
        this.content += "• Focused on physics and gameplay, specifically various boat-in-water motion scenarios, hand-written collision reactions<br/>\n";
        this.content += "• Using low-bandwidth client server communications, providing fast iteration for test and design, implementing creative fun ideas. <br/>\n";
        this.content += "Developed Attack Cruiser, cooperative 3rd person spaceship game for Clone Wars MMO <br/>\n";
        this.content += "• Focusing on movement and physics, specifically nested 3D transformations with moving detachable parts,cinematic cameras, curvature around a planet.  <br/>\n";
        this.content += "• Wrote AI pathing with bezier curve smoothing, various weapons and other fun gameplay elements. <br/>\n";
        this.content += "Ported Free Realms from PC to PS3 <br/>\n";
        this.content += "• Revamping in-game point of sale system and interface, improved memory management, deferred workload and other optimizations to make a PC game playable on console <br/>\n";
        break;
      case "workhb":
        this.content += "<strong>Software Engineer</strong>\n";
        this.content += "<em>January 2008 - September 2009</em>, Halifax, NS, Canada<br/>\n";
        this.content += "Developed NBA Live 09 for Wii<br/>\n";
        this.content += "• Generated new pointer-based GUI using C++ and Actionscript with an OO focus <br/>\n";
        this.content += "Developed Tiger Woods 10 for PSP/PS2<br/>\n";
        this.content += "• Managed large wardrobe asset tables while staying under memory limitations <br/>\n";
        this.content += "• Created UI elements to simulate TV broadcast  <br/>\n";
        this.content += "Developed World Cup 10 PSP<br/>\n";
        this.content += "• Rendered 3D models with complex rotation, texture mapping, lighting and shaders <br/>\n";
        this.content += "Assisted Development for Need For Speed Nitro Wii<br/>\n";
        break;
      default: this.content = "loremipsum"; break;
    }
  }
} 
