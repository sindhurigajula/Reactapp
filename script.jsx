var Product = React.createClass({
	getInitialState:function(){
		return {qty:0};
	},
	test:function(){
		alert("you bought Product XYZ successfully!");
		this.setState{qty: this.state.qty + 1};
		this.props.handletotal(this.props.price);
	},
	show:function(){
		this.props.handleShow(this.props.name);
	},
	render:function(){
		return (
		<div>
			<p> ${this.props.name} - ${this.props.price}</p>
			<button onClick={this.test}>Test</button>
			<button onClick={this.show}>Show</button>
			<h3>you bought {this.state.qty} products</h3>
			<hr/> 
		 </div>
		);
	} 
});
var Total = React.createClass({
	render:function(){
		<div>
			return(
				<h3>Total Cash:${this.props.total}</h3>
			);
		</div>
	}
});
var ProductForm = React.createClass({
	submit:function(e){
		e.preventDefault();
		var product = {
			name: this.refs.name.value;
			price: parseInt(this.refs.pric.value);
		}
		this.props.handleCreate;
		
		this.refs.name.value="";
		this.refs.name.value="";
	render: function(){
		return (
			<form onsubmit={this.submit}>
				<input type="text" placeholder="product Name" ref="name">
				<input type="text" placeholder="product Price" ref="price">
				<br/><br/>
				<button>Create Product</button>
				<hr/>
			</form>
		);
	}
});
		
var ProductList = React.createClass({
	getInitialState:function(){
		return {total:0,
		productlist: [
		{name="android" price={121}},
		{name="apple" price={123}}
		]
		};
	},
	createProduct: function(product){
		this.setState({
			productlist:this.state.productlist.concat(product)
		})
	},
	calculateTotal:function(price){
		this.setState(total: price + this.state.total);
		alert("your total is" + this.state.total);
	},
	showProduct:function(name){
		alert("You selected" + name);
	},
	render:function(){
		var component = this;
		var products = this.state.productlist.map(function(product) {
			return (
				<Product name={product.name} price={product.price}
					handleShow={component.showProduct}
					handletotal={component.calculateTotal}/>
			);
		});
		return (
			<div>
			 <ProductForm handleCreate={this.createProduct}/>
			 {products}
			  </Total total = {this.state.total}/>
			</div>
		);
	}
});
	
React.render(<Product/>,document.getElementById("root"));