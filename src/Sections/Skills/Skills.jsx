import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

// Import light theme icons
import javaIconLight from '../../assets/java-light.png';
import cIconLight from '../../assets/c-icon.png';
import pythonIconLight from '../../assets/python-light.png';
import sqlIconLight from '../../assets/sql-icon.png';
import matlabIconLight from '../../assets/matlab-light.png';
import awsIconLight from '../../assets/aws-light.png';
import gcpIconLight from '../../assets/gcp-light.png';
import mysqlIconLight from '../../assets/mysql-light.png';
import githubIconLight from '../../assets/github-light.png';
import vscodeIconLight from '../../assets/vscode-light.png';
import excelIconLight from '../../assets/excel-light.jpg';
import photoshopIconLight from '../../assets/photoshop-light.png';
import arduinoIconLight from '../../assets/arduino-light.png';
import lightroomIconLight from '../../assets/lightroom-light.png';

// Import dark theme icons
import javaIconDark from '../../assets/java-dark.svg';
import cIconDark from '../../assets/c-icon.png';
import pythonIconDark from '../../assets/python-dark.png';
import sqlIconDark from '../../assets/sql-icon.png';
import matlabIconDark from '../../assets/matlab-dark.png';
import awsIconDark from '../../assets/aws-dark.png';
import gcpIconDark from '../../assets/gcp-dark.png';
import mysqlIconDark from '../../assets/mysql-dark .png';
import githubIconDark from '../../assets/github-dark.png';
import vscodeIconDark from '../../assets/vscode-dark.png';
import excelIconDark from '../../assets/excel-dark.jpg';
import photoshopIconDark from '../../assets/photoshop-dark.jpeg';
import arduinoIconDark from '../../assets/arduino-dark.png';
import lightroomIconDark from '../../assets/lightroom-dark.jpg';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const icons = theme === 'light' ? {
    java: javaIconLight,
    c: cIconLight,
    python: pythonIconLight,
    sql: sqlIconLight,
    matlab: matlabIconLight,
    aws: awsIconLight,
    gcp: gcpIconLight,
    mysql: mysqlIconLight,
    github: githubIconLight,
    vscode: vscodeIconLight,
    excel: excelIconLight,
    photoshop: photoshopIconLight,
    arduino: arduinoIconLight,
    lightroom: lightroomIconLight
  } : {
    java: javaIconDark,
    c: cIconDark,
    python: pythonIconDark,
    sql: sqlIconDark,
    matlab: matlabIconDark,
    aws: awsIconDark,
    gcp: gcpIconDark,
    mysql: mysqlIconDark,
    github: githubIconDark,
    vscode: vscodeIconDark,
    excel: excelIconDark,
    photoshop: photoshopIconDark,
    arduino: arduinoIconDark,
    lightroom: lightroomIconDark
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" icon={icons.java} />
        <SkillList src={checkMarkIcon} skill="C" icon={icons.c} />
        <SkillList src={checkMarkIcon} skill="Python" icon={icons.python} />
        <SkillList src={checkMarkIcon} skill="SQL" icon={icons.sql} />
        <SkillList src={checkMarkIcon} skill="MATLAB" icon={icons.matlab} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS" icon={icons.aws} />
        <SkillList src={checkMarkIcon} skill="GCP" icon={icons.gcp} />
        <SkillList src={checkMarkIcon} skill="MySQL" icon={icons.mysql} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Github" icon={icons.github} />
        <SkillList src={checkMarkIcon} skill="VScode" icon={icons.vscode} />
        <SkillList src={checkMarkIcon} skill="Excel" icon={icons.excel} />
        <SkillList src={checkMarkIcon} skill="Adobe-Photoshop" icon={icons.photoshop} />
        <SkillList src={checkMarkIcon} skill="Arduino" icon={icons.arduino} />
        <SkillList src={checkMarkIcon} skill="Lightroom" icon={icons.lightroom} />
      </div>
    </section>
  );
}

export default Skills;
