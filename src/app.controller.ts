import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV + " igor");
  }

  @Get('cidades2')
  getCities() {
    return {
      nome: 'Crato',
      id: 1,
    };
  }

  @Get('estados')
  getStates() {
    return {
      nome: 'CE',
      id: 1,
    };
  }
}
