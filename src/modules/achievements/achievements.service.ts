import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import * as puppeteer from 'puppeteer';
import { Repository } from 'typeorm';

import { Achieve } from './entities/achieve.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achieve)
    private readonly repAch: Repository<Achieve>,
  ) {}

  async createDB() {
    try {
      const achieves = await this.parseWeb();

      for (const item of achieves) {
        const checkItem = await this.repAch.findOne({ where: { ...item } });
        if (!checkItem) {
          await this.repAch.save({ ...item });
        }
      }
      return { message: 'Susses!!!!' };
    } catch (err) {
      throw new InternalServerErrorException('ErrorDB');
    }
  }

  private async parseWeb() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(process.env.GI_WEB_URL || '');

    await page.waitForSelector('.art_stat_table');

    const table = await page
      .evaluate(() => {
        const data = document.getElementsByClassName('art_stat_table');
        const rows = data[0].getElementsByTagName('tr');
        const objectsRows = Object.values(rows);
        const arrObj = objectsRows.map((row) => {
          const achieve = Object.values(row.getElementsByTagName('td'));
          return {
            name: achieve[2].innerText,
            text: achieve[3].innerText,
            value: achieve[4].innerText,
            ver: achieve[6].innerText,
          };
        });

        return arrObj.slice(1);
      })
      .catch(() => {
        throw new Error('Error');
      });

    await browser.close();
    return table;
  }
}
