ModalWindow = Class.create({
	initialize: function(){
		this.cont = "";
		this.overlay = "";
		this.win = "";
		this.container = new Element('div', {id:'modal-container'});
		var container = this.container;
		$(document.body).insert({bottom:container});
	},
	show: function(element, overlay){
		this.close();
		this.cont = element;
		if(overlay) this.overlay = this.container.appendChild(new Element('div', {'class':'modal-overlay'}));
		this.win = this.container.appendChild(new Element('div', {'class':'modal-window'}));
		this.win.insert({bottom:this.cont});
		var closeBtn = new Element('span',{id:'modal-close-btn'}).update("[Close]");
		this.win.insert({bottom:closeBtn});
		$("modal-close-btn").observe('click', this.close.bind(this));
	},
	close: function(e){
		if(e) e.stop();
		this.container.childElements().invoke('remove');
	}
});