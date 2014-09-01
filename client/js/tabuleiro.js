/** @jsx React.DOM */

var Tabuleiro = React.createClass({

	onResize : function(){
		var size = this.getSize();	
		// está se baseando na altura, calcular prevendo o menor!
		var h = size.h;
		var w = h*1.44;
		
		var svg = $(document.getElementById("tabuleiro").firstChild);
		svg.height(h);
		svg.width(w);
	}, 
	
	getSize : function(){
		var cmp = $(this.getDOMNode());
		return {
			w: cmp.width(),
			h: cmp.height()
		}
	},

	render: function() {

	    var continents = this.props.data.continents.map(function (continent) {
	      	return (
	      		<Continent c={continent} />				   
	      	);
	    });

	    var lines = this.props.data.lines.map(function(path){
	    	return (
	    		<path strokeDasharray="3,3" d={path} />
    		)

	    });

	    var width = 915; //*1.44
	    var height = 635;  
	    var viewBox = " 1 1 " + width + " " + height;

		return (
			<div id="tabuleiro" className="tabuleiro"> 
				<svg version="1.1" height={height}  width={width} xmlns="http://www.w3.org/2000/svg" 
					viewBox={viewBox} preserveAspectRatio="xMinYMin" >
					
					<rect width={width}  height={height} fill="#AADDFF"/>
					{continents}
					<g fill="none" stroke="#555" strokeWidth="2">{lines}</g>
				</svg>
			</div>
		);
	},

	componentDidMount: function() {
	   	this.onResize();
	    $(window).resize(this.onResize);
	}

});

var Continent = React.createClass({
	render: function() {
		var gradientID = "gradient"+this.props.c.id;

	    var countries = this.props.c.countries.map(function (country) {
	      	return (
	      		<Country country={country} gradientID={gradientID}/>				   
	      	);
	    });

	    return (
			<g className={this.props.c.id}> 
				<defs>
				    <radialGradient id={gradientID}	fx="50%" fy="50%" r="65%" spreadMethod="pad">
			          <stop offset="0%"   stopColor={this.props.c.color[0]} stopOpacity="0.8"/>
			          <stop offset="100%" stopColor={this.props.c.color[1]} stopOpacity="1" />
			        </radialGradient>
				</defs>

				{countries}
			</g>
		)
	}
});


var Country = React.createClass({



	mouseover: function(){
		var el =this.getDOMNode().firstChild;
		el.backup = el.style.fill;
        el.style.fill = "url(#gradientAFRICA)";
    },

    mouseout: function(){
        var el = this.getDOMNode().firstChild;
         el.style.fill = el.backup;
    },




    getInitialState: function() {
    	console.log("getInitialState + "+ socket);
    	socket.on('send:color', this.colorChanged);

		return {
			color: "white",
			count: 0
		};
	},

	colorChanged : function(data){
		console.log("trocou de volta");
		
		if(data.country == this.props.country.id){
			var color = data.color;
			this.setState({ color: color});
		}
	},

	click : function(e){
		console.log("clicou"+socket);
		socket.emit('send:color', {color:'red', country : this.props.country.id});
		this.setState({ color: 'red'});
	},

	render: function() {
		var fillURL = "url(#"+this.props.gradientID+")";
		return (
			<g className={this.props.country.id}>
				<path onMouseOver={this.mouseover} onMouseOut={this.mouseout} stroke="#000000" fill={fillURL} d={this.props.country.path} strokeOpacity="0.25" strokeWidth="1.5"></path>
        		<circle onClick={this.click} cx={this.props.country.coords.name[0]}  cy={this.props.country.coords.name[1]}  r="7" stroke="#006600" fill={this.state.color} />
        		<text x={this.props.country.coords.name[0]} y={this.props.country.coords.name[1]} fill="black"
	        		fontFamily="Arial"  fill="#333"   fontSize="13px">{this.props.country.display}
	        	</text>	 

	        </g>	
		);
	}
});
