document.addEventListener("DOMContentLoaded", () => { 

    // This finds the empty <header> tag in your HTML 

    const header = document.querySelector("header"); 

     

    if (header) { 

        header.innerHTML = ` 

            <nav class="nav-links" style="position: absolute; left: 30px; display: flex; gap: 20px;"> 

                <a href="cpp.html" class="nav-item">Home</a> 

                <a href="#" class="nav-item">About</a> 

            </nav> 

 
 

            <div class="title-group" style="text-align: center;"> 

                <a href="cpp.html" style="text-decoration: none;"> 

                    <h1 style="font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; margin: 0; background: linear-gradient(to right, #fff, #666); -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer;"> 

                        Drift Deck 

                    </h1> 

                </a> 

                <div class="subtitle" style="color: #444; font-size: 0.6rem; letter-spacing: 3px; text-transform: uppercase;"> 

                    Premium Electric Showroom 

                </div> 

            </div> 

 
 

            <nav class="nav-right" style="position: absolute; right: 30px;"> 

                <a href="#" class="nav-item">garage (0)</a> 

            </nav> 

        `; 

    } 

}); 

 