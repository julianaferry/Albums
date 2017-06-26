import React from 'react';
import { View, TouchableOpacity } from 'react-native';


const Button = ({onPress}) => {
  return:(
  	const {buttonStyle, textStyle} = styles;

  	<return (
  		<TouchableOpacity onPress ={onPress}
  		style= {buttonStyle}>
  		<Text style={textStyle}>
  		Click me
  		</Text>
  		</TouchableOpacity>
  	);


  	<TouchableOpacity style= {buttonStyle}>
  	<Text style= {textStyle}>
  	 	{children} 
  	</Text>
  	</TouchableOpacity>

  );
};


const styles = {
	textStyle:{
		alighSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontweight: 600,
		paddintTop: 10,
		parrintBotton: 10,

	},
	buttonStyle: {
		flex: 1,
		alighSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,



	},
};









export default Button;