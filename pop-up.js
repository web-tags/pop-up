POPUP = new class {
	constructor(){
		this.list = {};
	}
	show(id) {
		if(id.target) id = id.target.getAttribute('popup');
		this.closeAll();
		this.list[id].hidden = false;
		// document.querySelectorAll('pop-up').forEach(item=>item.hidden=true);
		// document.querySelector('pop-up#'+id).hidden = false;
	}
	closeAll(){
		for(var key in this.list)
			this.list[key].hidden = true;
	}
	register(CE){
		this.list[CE.id] = CE;
	}
}
POPUPshow = POPUP.show.bind(POPUP);

