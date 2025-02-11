import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Gyerek } from './entities/gyerek.entity';

@Controller('gyerek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  /**
   * hozzáadja az adatbázishoz a gyerek adatait
   * 
   * @param createGyerekDto Az új gyerek adatai
   * @returns Minden adatot, beleértve a generált mezőket
   */

  @Post()
  @ApiResponse({
    status: 201,
    description: "Sikeresen létrehozva",
    type: Gyerek,
    example:{
      nev: 'Kis Gyuszi',
      lakcim: '111 asd asd u. 1',
      jo: true,
      kerJatek: "Csákány"
    }
  })

  @ApiBadRequestResponse({
    description: "aaaaaaaa"
  })

  @ApiBearerAuth()
  create(@Body() createGyerekDto: CreateGyerekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: "Visszaadja az összes gyerek adatait",
    type: [Gyerek]
  })
  findAll() {
    return this.gyerekService.findAll();
  }


  @ApiResponse({
    status: 201,
    description: "Visszaadja az összes jó gyerek adatait",
    type: [Gyerek]
  })
  @Get("jo")
  joGyerekek(){
    return this.gyerekService.joGyerekek()
  }


  /**
   * 
   * @param id Gyerek id
   * @returns 
   */
  @ApiParam({
    name: "id",
    description: "A gyerek Id je",
    type: "number",
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyerekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto) {
    return this.gyerekService.update(+id, updateGyerekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gyerekService.remove(+id);
  }


}
