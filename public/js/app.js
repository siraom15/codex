function compile() {
	var editor = document.getElementById("code-editor");
	var code = document.getElementById("code-preview");
	var preview = code.contentDocument || code.contentWindow.document;
        preview.open();
        preview.write(editor.getValue());
        preview.close();
};

