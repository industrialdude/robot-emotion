import { html, css, LitElement } from 'lit';

export class RobotEmotion extends LitElement {
  static get styles() {
    return css`

    :host {
      display: block;
    }

    .container{
      height: 100%;
      width:100%;
      position: relative;
    }
    
    .myfilter{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        animation: mymove 1s infinite;  
        animation-timing-function: steps(8);              
      } 
       
      @keyframes mymove{
          0% {
            transform: translateX(1px) rotateZ(0deg);
          }        
          100% {
            transform: translateY(1px) rotateZ(360deg);
          }
      }

      .borderfilter{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        animation: mymove2 0.5s infinite;  
        animation-timing-function: steps(4);              
      } 
       
      @keyframes mymove2{
          0% {
            transform: rotateZ(00deg);
          }        
          100% {
            transform:  rotateZ(360deg);
          }
      }

      .eyes{
        animation: eyesmove 1s infinite;                
      } 
       
      @keyframes eyesmove{
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }        
          100% {
            transform:   scale(1);
          }
      }


    `;
  }

  static get properties() {
    return {
      emotion: String,
      matchingblink: String,
      blink: Boolean,
    };
  }

  constructor() {
    super();
    this.blink = false;
    this.emotion = "blink";
    this.matchingblink = "blink";
    this._timer = setTimeout(() => { this._showEmotion(); }, 500);
  }

  updated() {
    //this._showEmotion();
  }

  _showEmotion() {
    this.blink = false;
    this.shadowRoot.getElementById(this.matchingblink).hidden = !this.blink;
    this.shadowRoot.getElementById(this.emotion).hidden = this.blink;
    const minimumWait = 3000;
    const maximumWait = 5500;    
    let wait = Math.random() * (maximumWait - minimumWait) + minimumWait;
    this._timer = setTimeout(() => { this._showBlink(); }, wait);   
    this.render();
  }

  _showBlink() {
    this.blink = true;
    this.shadowRoot.getElementById(this.matchingblink).hidden = !this.blink;
    this.shadowRoot.getElementById(this.emotion).hidden = this.blink;
    this._timer = setTimeout(() => { this. _showEmotion(); }, 100);  
    this.render();
  }

  render() {
    return html`
    <div class="container">
      <div id="happy" hidden>
      <svg class="myface eyes" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">       
      <path d="M15.1297 0H4.80896C2.15305 0 0 2.15304 0 4.80896V15.1297C0 17.7856 2.15305 19.9387 4.80896 19.9387H15.1297C17.7856 19.9387 19.9387 17.7856 19.9387 15.1297V4.80896C19.9387 2.15304 17.7856 0 15.1297 0Z" fill="#00000F" stroke="black" stroke-width="0.0613368"/>
      <path d="M4.35768 5H7.64232C8.39215 5 9 5.5863 9 6.30953V9.69047C9 10.4137 8.39215 11 7.64232 11H4.35768C3.60785 11 3 10.4137 3 9.69047V6.30953C3 5.5863 3.60785 5 4.35768 5Z" fill="white"/>
      <path d="M11.4981 4H15.5019C16.3293 4 17 4.68401 17 5.52778V9.47222C17 10.316 16.3293 11 15.5019 11H11.4981C10.6707 11 10 10.316 10 9.47222V5.52778C10 4.68401 10.6707 4 11.4981 4Z" fill="white"/>
      </svg>

      <img class="myfilter tranparentClass" src="./randompixels4.png">
      <img class="myfilter tranparentClass" src="./randompixels5white.png">
      <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
      </div>
      
      <div id="blink" hidden>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.1604 0.0306702H4.83962C2.1837 0.0306702 0.0306625 2.18371 0.0306625 4.83962V15.1604C0.0306625 17.8163 2.1837 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z"
            fill="#00000F" stroke="black" stroke-width="0.0613368" />
          <path
            d="M8.3607 7.10951H3.86657C2.93791 7.10951 2.18509 7.23577 2.18509 7.39152V8.11962C2.18509 8.27537 2.93791 8.40163 3.86657 8.40163H8.3607C9.28935 8.40163 10.0422 8.27537 10.0422 8.11962V7.39152C10.0422 7.23577 9.28935 7.10951 8.3607 7.10951Z"
            fill="white" />
          <path
            d="M16.062 7.10951H11.8027C10.8304 7.10951 10.0422 7.23519 10.0422 7.39023V8.11498C10.0422 8.27002 10.8304 8.3957 11.8027 8.3957H16.062C17.0343 8.3957 17.8226 8.27002 17.8226 8.11498V7.39023C17.8226 7.23519 17.0343 7.10951 16.062 7.10951Z"
            fill="white" />
        </svg>
        <img class="myfilter" src="./randompixels4.png">
        <img class="myfilter tranparentClass" src="./randompixels5white.png">
        <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
      </div>
    
      <div id="sad" hidden>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18371 0.0306702 4.83962V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z" fill="#00000F" stroke="black" stroke-width="0.0613368"/>
<path d="M7.54453 8.97592C7.54453 8.97592 10 7.70653 10 8.06319V10.096C10 10.4526 9.72321 11.9028 8.65172 11.9257L5.17483 11.9998C4.10334 12.0226 2.7335 10.135 3.045 10.096L4.47783 9.9162C5.95846 9.74997 7.54453 8.97592 7.54453 8.97592V8.97592Z" fill="white"/>
<path d="M13.1047 8.97592C13.1047 8.97592 11 7.70653 11 8.06319V10.096C11 10.4526 11.2373 11.9028 12.1557 11.9257L15.1359 11.9998C16.0543 12.0226 17.2284 10.135 16.9614 10.096L15.7333 9.9162C14.4642 9.74997 13.1047 8.97592 13.1047 8.97592V8.97592Z" fill="white"/>
</svg>


        <img class="myfilter tranparentClass" src="./randompixels4.png">
        <img class="myfilter tranparentClass" src="./randompixels5white.png">
        <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
      </div>
      
      <div id="blinklow" hidden>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18372 0.0306702 4.83963V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83963C19.9693 2.18372 17.8163 0.0306702 15.1604 0.0306702Z"
            fill="#00000F" stroke="black" stroke-width="0.0613368" />
          <path
            d="M8.36071 9.75537H3.86658C2.93793 9.75537 2.1851 9.88163 2.1851 10.0374V10.7655C2.1851 10.9212 2.93793 11.0475 3.86658 11.0475H8.36071C9.28937 11.0475 10.0422 10.9212 10.0422 10.7655V10.0374C10.0422 9.88163 9.28937 9.75537 8.36071 9.75537Z"
            fill="white" />
          <path
            d="M16.062 9.75537H11.8027C10.8304 9.75537 10.0422 9.88105 10.0422 10.0361V10.7608C10.0422 10.9159 10.8304 11.0416 11.8027 11.0416H16.062C17.0344 11.0416 17.8226 10.9159 17.8226 10.7608V10.0361C17.8226 9.88105 17.0344 9.75537 16.062 9.75537Z"
            fill="white" />
        </svg>
        <img class="myfilter tranparentClass" src="./randompixels4.png">
        <img class="myfilter tranparentClass" src="./randompixels5white.png">
        <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
      </div>
      
      <div id="angry" hidden>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1604 0.0306702H4.83962C2.18371 0.0306702 0.0306702 2.18371 0.0306702 4.83962V15.1604C0.0306702 17.8163 2.18371 19.9693 4.83962 19.9693H15.1604C17.8163 19.9693 19.9693 17.8163 19.9693 15.1604V4.83962C19.9693 2.18371 17.8163 0.0306702 15.1604 0.0306702Z" fill="#00000F" stroke="black" stroke-width="0.0613368"/>
<path d="M6.50763 5.73999C6.50763 5.73999 8.3158 6.59576 10 7.63215L9.94737 9.86932C9.94737 9.86932 9.67828 9.89514 8.63662 9.91889L5.25652 9.99596C4.21486 10.0197 3.13336 9.93109 3.13336 9.93109L3 4L6.50765 5.73999H6.50763Z" fill="white"/>
<path d="M13.9935 5.73999C13.9935 5.73999 12.4436 6.59576 11 7.63215L11.0451 9.86932C11.0451 9.86932 11.2758 9.89514 12.1686 9.91889L15.0658 9.99596C15.9587 10.0197 16.8857 9.93109 16.8857 9.93109L17 4L13.9934 5.73999H13.9935Z" fill="white"/>
</svg>


        <img class="myfilter tranparentClass" src="./randompixels4.png">
        <img class="myfilter tranparentClass" src="./randompixels5white.png">
        <img class="borderfilter tranparentClass" src="./randompixelsborder.png">
      </div>
    </div>
    

`;
  }
}
