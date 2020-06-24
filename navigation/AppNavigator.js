import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BranchSelectScreen from '../screens/BranchSelectScreen';
import YearSelectScreen from '../screens/YearSelectScreen';
import SubjectSelectScreen from '../screens/SubjectSelectScreen';
import QuestionPapersScreen from '../screens/QuestionPapersScreen';
import FirstCCE from '../yearSubjects/FirstCCE';
import SecondCCE from '../yearSubjects/SecondCCE';
import ThirdCCE from '../yearSubjects/ThirdCCE';
import FourthCCE from '../yearSubjects/FourthCCE';
import ChemistrySem from '../yearSubjects/ChemistrySem';
import PhysicsSem from '../yearSubjects/PhysicsSem';
import Colors from '../constants/Colors';

import BasicElectronics from '../allSubjects/BasicElectronics';
import COA from '../allSubjects/COA';
import STLD from '../allSubjects/STLD';

const screenNavigator = createStackNavigator(
	{
		TheQuestionBank: BranchSelectScreen,
		YearSelectCCE: YearSelectScreen,
		SubjectSelect: SubjectSelectScreen,
		QuestionPapers: QuestionPapersScreen,
		FirstCCE: FirstCCE,
		SecondCCE: SecondCCE,
		ThirdCCE: ThirdCCE,
		FourthCCE: FourthCCE,
		ChemistrySem: ChemistrySem,
		PhysicsSem: PhysicsSem,
		BasicElectronics: BasicElectronics,
		COA: COA,
		STLD: STLD
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primary
			},
			headerTintColor: 'white'
		}
	}
);

export default createAppContainer(screenNavigator);
