import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-galeria',
    imports: [CommonModule],
    templateUrl: './galeria.html',
    styleUrl: './galeria.css'
})
export class Galeria {

    manillas = [
        {
            nombre: 'Manilla Negra',
            precio: '$20.000 COP',
            imagen: 'images/manilla1.jpg',
            descripcion: 'Diseño elegante.'
        },
        {
            nombre: 'Manilla Roja',
            precio: '$15.000 COP',
            imagen: 'images/manilla2.jpg',
            descripcion: 'Acabado premium.'
        },
        {
            nombre: 'Manilla Azul',
            precio: '$20.000 COP',
            imagen: 'images/manilla3.jpg',
            descripcion: 'Diseño exclusivo.'
        },
        {
            nombre: 'Manilla Colores',
            precio: '$15.000 COP',
            imagen: 'images/manilla4.jpg',
            descripcion: 'Diseño elegante.'
        },
        {
            nombre: 'Manilla Dorada',
            precio: '$15.000 COP',
            imagen: 'images/manilla5.jpg',
            descripcion: 'Acabado premium.'
        },
        {
            nombre: 'Manilla Corazon',
            precio: '$10.000 COP',
            imagen: 'images/manilla6.jpg',
            descripcion: 'Diseño exclusivo.'
        },
        {
            nombre: 'Manilla Corazon Blanca',
            precio: '$20.000 COP',
            imagen: 'images/manilla7.jpg',
            descripcion: 'Diseño elegante.'
        },
        {
            nombre: 'Manilla Corazon Negra',
            precio: '$20.000 COP',
            imagen: 'images/manilla8.jpg',
            descripcion: 'Acabado premium.'
        },
        {
            nombre: 'Collar 11/11',
            precio: '$30.000 COP',
            imagen: 'images/manilla9.jpg',
            descripcion: 'Diseño exclusivo.'
        }
    ];

    manillaSeleccionada: any = null;

    abrirManilla(manilla: any) {
        this.manillaSeleccionada = manilla;
    }

    cerrarManilla() {
        this.manillaSeleccionada = null;
    }

}
