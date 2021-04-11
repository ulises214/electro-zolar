import adhesivos_colima from './img/adhesivos_colima/index';
import altozano from './img/altozano/index';
import arcadio from './img/arcadio/index';
import carlo_hugo from './img/carlo_hugo/index';
import carmelo_edif_1 from './img/carmelo_edif_1/index';
import cuauhtemoc from './img/cuauhtemoc/index';
import fracc_jardin from './img/fracc_jardin/index';
import lic_elias from './img/lic_elias/index';
import queretaro from './img/queretaro/index';
import ruben from './img/ruben/index';
import sindicato_de_trabajadores from './img/sindicato_de_trabajadores/index';
import templo from './img/templo/index';
import tlajomulco from './img/tlajomulco/index';
import zacatecas from './img/zacatecas/index';
interface Installation {
  name: string;
  images: string[];
}
const installations: Installation[] = [
  { name: 'Adhesivos Colima', images: adhesivos_colima },
  { name: 'Altozano', images: altozano },
  { name: 'Arcadio', images: arcadio },
  { name: 'Carlo Hugo', images: carlo_hugo },
  { name: 'Carmelo Edif 1', images: carmelo_edif_1 },
  { name: 'Cuauhtémoc', images: cuauhtemoc },
  { name: 'Fracc Jardín', images: fracc_jardin },
  { name: 'Lic. Elias', images: lic_elias },
  { name: 'Querétaro', images: queretaro },
  { name: 'Rubén', images: ruben },
  { name: 'Sindicato de trabajadores', images: sindicato_de_trabajadores },
  { name: 'Templo', images: templo },
  { name: 'Tlajomulco', images: tlajomulco },
  { name: 'Zacatecas', images: zacatecas },
];
export default installations;
