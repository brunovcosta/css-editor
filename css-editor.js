(function cssEditor(parent){
	parent = parent || document.body;
	editor =  document.getElementById("css-editor-textarea") || document.createElement("textarea");
	editor.id = "css-editor-textarea";
	editor.style.position="fixed";
	editor.style.top="0";
	editor.style.left="0";
	editor.style.zIndex=9999999;
	style = document.getElementById("css-editor-style") || document.createElement("style");
	style.id = "css-editor-style";
	editor.onkeyup = function(evt){
		style.innerHTML = evt.target.value;
	}
	parent.appendChild(editor);
	parent.appendChild(style);
})()
