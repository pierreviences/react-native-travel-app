import {
	StyleSheet,
	Platform,
	Dimensions
} from 'react-native'
import {
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	flex: {
		flex: 1
	},

	/*FORM*/
	HeaderForm: {
		height: 60,
		paddingVertical: 15,
		paddingLeft: 15
	},
	TitleHeaderForm: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},

	/*HOME*/
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	banner: {
		height: 170,
		width: '100%',
		position: 'relative'
	},
	iconProfile: {
		top: 25,
		position: 'absolute',
	},
	PictureProfile: {
		height: 140,
		width: 140,
		resizeMode: 'stretch',
		flex: 1
	},
	body: {
		width: '100%',
		backgroundColor: 'white',
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		shadowOffset: {
			width: 0,
			height: 2,
		},

	},
	ImageBanner: {
		height: 300,
		width: '100%',
		opacity: 0.7,
	},
	textPackageRecomen: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#343434',
		marginTop: 12,
		width: wp('43%')
	},
	descriptionPackage: {
		fontSize: 12,
		color: '#8e8e8e',
		marginTop: 5,
		width: wp('43%')
	},
	SeeAllContain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16
	},
	Line: {
		marginTop: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#DCDCDC'
	},
	SearchPackage: {
		borderWidth: 2,
		paddingVertical: 5,
		paddingLeft: 50,
		color: 'grey',
		marginTop: 8,
		width: '100%',
		borderRadius: 13
	},

	/*PACKAGE*/
	bodyPackage: {
		width: '100%',
		backgroundColor: 'white',
		shadowColor: 'grey',
		elevation: 6,
		shadowOpacity: 0.25,
		shadowRadius: 2,
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 2,
		}
	},
	containPackage: {
		paddingHorizontal: 17,
		paddingVertical: 30
	},
	containImagePackage: {
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		width: 130
	},
	sizePackage: {
		width: 130,
		height: 130
	},
	imagePackage: {
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		width: undefined,
		height: undefined,
		resizeMode: 'cover',
		flex: 1
	},
	textSeeAll: {
		fontSize: 17,
		fontWeight: 'bold'
	},

	/*MY ACCOUNT*/

	imageProfileContainer: {
		flex: 1,
		paddingVertical: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageProfile: {
		backgroundColor: 'white',
		width: 120,
		height: 120,
		borderRadius: 110
	},
	imageProfileTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10
	},
	editTitle: {
		flex: 1,
		paddingVertical: 30
	},
	iconTitles: {
		marginLeft: 70,
	},

	bodyAccount: {
		borderBottomWidth: 1,
		borderColor: '#C9C9C9',
		justifyContent: 'space-between',
		height: 50,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row'
	},
	headerProfile: {
		height: 220,
		paddingVertical: 25,
		paddingHorizontal: 15
	},

	headerTitleProfile: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25,
	},

	/*DETAIL*/
	bodyDetail: {
		marginTop: 70,
		paddingHorizontal: 30
	},
	image_contain: {
		width: height_image,
		height: height_image,
		marginTop: height_image / 5,

	},
	imageDetail: {
		width: '100%',
		height: '100%',
		borderWidth: 3,
		borderColor: '#EFF0F1',

	},
	backDetail: {
		position: 'absolute',
		left: 0,
		marginTop: 30,
		marginLeft: 15
	},
	textOrder: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	},
	statusDetail: {
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: 50,
		paddingVertical: 3,
		borderColor: 'green'

	},
	textPriceDetail: {
		color: '#F89B3E',
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: 20
	},
	nameDetail: {
		color: '#3e3c3e',
		fontWeight: 'bold',
		fontSize: 45,
		marginTop: 3
	},
	buttonDetail: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		paddingVertical: 10,
		borderRadius: 100,
		marginBottom: 20,
		elevation: 1
	}
})
export {
	styles
}