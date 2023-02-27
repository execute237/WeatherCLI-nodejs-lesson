import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${err}`)
};

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${msg}`)
};

const printHelp = () => {
    console.log(dedent`
    ${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `)
};

const printWeather = (res) => {
    console.log(dedent`${chalk.bgYellow('ПОГОДА')}
    ${res.name}
    ${res.weather[0].description}
    Температура: ${res.main.temp}
    Ощущается как ${res.main.feels_like}
    `);
}

export {printError,printSuccess, printHelp,printWeather};