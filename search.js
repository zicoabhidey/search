/*
// Load the XML document
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, "text/xml");
    
    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.querySelector("#query").value;
      
      // Search the XML document for matching tags
      const tags = xmlDoc.getElementsByTagName(query);
      
      const childTagNames = [];
      const childNodes = tags.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const childNode = childNodes[i];
        if (childNode.nodeType === 1) { // Element node
          childTagNames.push(childNode.tagName);
          console.log(childTagNames)
        }
      }
      // Display the search results
      const resultsDiv = document.querySelector("#results");
      resultsDiv.innerHTML = "";
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const tagName = tag.tagName;
        const tagStr = new XMLSerializer().serializeToString(tag);
        resultsDiv.innerHTML += `${tagName}<pre>${tagStr}</pre>`;
      }
    });
  }
};
xhr.open("GET", "directors.xml");
xhr.send();

// Load the XML document
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, "text/xml");
    
    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.querySelector("#query").value;
      
      // Search the XML document for the query tag
      const queryTag = xmlDoc.getElementsByTagName(query)[0];
      
      // Extract the names of the child tags
      const childTagNames = [];
      const childNodes = queryTag.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const childNode = childNodes[i];
        if (childNode.nodeType === 1) { // Element node
          childTagNames.push(childNode.tagName);
        }
      }
      
      // Display the search results and child tag names
      const resultsDiv = document.querySelector("#results");
      resultsDiv.innerHTML = "";
      if (childTagNames.length > 0) {
        resultsDiv.innerHTML += `<h2>Child tags under '${query}':</h2>`;
        for (let i = 0; i < childTagNames.length; i++) {
          const childTagName = childTagNames[i];
          resultsDiv.innerHTML += `<pre>${childTagName}</pre>`;
        }
      } else {
        resultsDiv.innerHTML += `<p>No child tags found under '${query}'</p>`;
      }
      
      const matchingTags = xmlDoc.getElementsByTagName(query);
      if (matchingTags.length > 0) {
        resultsDiv.innerHTML += `<h2>Search results:</h2>`;
        for (let i = 0; i < matchingTags.length; i++) {
          const matchingTag = matchingTags[i];
          const childTagName = childTagNames[i];
          const tagStr = new XMLSerializer().serializeToString(matchingTag);
          resultsDiv.innerHTML += `${childTagName}<pre>${tagStr}</pre>`;
        }
      } else {
        resultsDiv.innerHTML += `<p>No '${query}' tags found</p>`;
      }
    });
  }
};
xhr.open("GET", "directors.xml");
xhr.send();

// Load the XML document
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, "text/xml");

    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.querySelector("#query").value;

      // Search the XML document for matching tags
      const matchingTags = xmlDoc.getElementsByTagName(query);

      // Display the search results
      const resultsDiv = document.querySelector("#results");
      resultsDiv.innerHTML = "";
      if (matchingTags.length > 0) {
        resultsDiv.innerHTML += `<h2>Search results:</h2>`;
        for (let i = 0; i < matchingTags.length; i++) {
          const matchingTag = matchingTags[i];
          const tagName = matchingTag.tagName;
          const tagStr = new XMLSerializer().serializeToString(matchingTag);
          resultsDiv.innerHTML += `<pre><strong>${tagName}</strong>${tagStr}</pre>`;
        }
      } else {
        resultsDiv.innerHTML += `<p>No '${query}' tags found</p>`;
      }
    });
  }
};
xhr.open("GET", "directors.xml");
xhr.send();
*/
// Load the XML document
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.responseText, "text/xml");

    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const query = document.querySelector("#query").value;

      // Search the XML document for matching tags
      const matchingTags = xmlDoc.getElementsByTagName(query);
      const directorNames = xmlDoc.getElementsByTagName("name");
     

      // Display the search results
      const resultsDiv = document.querySelector("#results");
      resultsDiv.innerHTML = "";
      
      if (matchingTags.length > 0) {
        resultsDiv.innerHTML += `<h2>Search results:</h2>`;
        for (let i = 0; i < matchingTags.length; i++) {
            if(i < directorNames.length) {
                const directorName = directorNames[i];
                console.log(directorName);
                resultsDiv.innerHTML += directorName.textContent;
            }
          const matchingTag = matchingTags[i];
          //console.log(matchingTag);
          const tagName = matchingTag.tagName;
          const childNodes = matchingTag.childNodes;
          //colsole.log(childNodes);
          let childTagNames = "";
          for (let j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType === Node.ELEMENT_NODE) {
              const childTagName = childNodes[j].tagName;
              if (childTagNames !== "") {
                childTagNames += ", ";
              }
              childTagNames += childTagName;
            }
          }
          const tagStr = new XMLSerializer().serializeToString(matchingTag);
          console.log(tagStr);
         
          resultsDiv.innerHTML += `<pre><strong>${tagName}</strong> (${childTagNames}): ${tagStr}</pre>`;
        }
      } else {
        resultsDiv.innerHTML += `<p>No '${query}' tags found</p>`;
      }
    });
  }
};
xhr.open("GET", "https://raw.githubusercontent.com/zicoabhidey/search/main/directors.xml");
xhr.send();





