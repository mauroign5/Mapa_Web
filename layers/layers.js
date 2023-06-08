var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vm_mzn_1 = new ol.format.GeoJSON();
var features_vm_mzn_1 = format_vm_mzn_1.readFeatures(json_vm_mzn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vm_mzn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vm_mzn_1.addFeatures(features_vm_mzn_1);
var lyr_vm_mzn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vm_mzn_1, 
                style: style_vm_mzn_1,
                interactive: true,
                title: '<img src="styles/legend/vm_mzn_1.png" /> vm_mzn'
            });
var format_colegios_via_2 = new ol.format.GeoJSON();
var features_colegios_via_2 = format_colegios_via_2.readFeatures(json_colegios_via_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colegios_via_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colegios_via_2.addFeatures(features_colegios_via_2);
var lyr_colegios_via_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colegios_via_2, 
                style: style_colegios_via_2,
                interactive: true,
                title: '<img src="styles/legend/colegios_via_2.png" /> colegios_viña'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_vm_mzn_1.setVisible(true);lyr_colegios_via_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_vm_mzn_1,lyr_colegios_via_2];
lyr_vm_mzn_1.set('fieldAliases', {'FID_1': 'FID_1', 'CUT': 'CUT', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'NOMBRE_DIS': 'NOMBRE_DIS', 'CODIGO_DIS': 'CODIGO_DIS', 'MANZENT': 'MANZENT', 'ZONA_CENSA': 'ZONA_CENSA', 'MANZANA': 'MANZANA', 'TOTAL_PERS': 'TOTAL_PERS', 'TOTAL_HOMB': 'TOTAL_HOMB', 'TOTAL_MUJE': 'TOTAL_MUJE', 'PERSONAS_0': 'PERSONAS_0', 'PERSONAS_6': 'PERSONAS_6', 'PERSONAS_1': 'PERSONAS_1', 'PERSONAS_M': 'PERSONAS_M', 'PERSONAS_E': 'PERSONAS_E', 'PUEBLOS_IN': 'PUEBLOS_IN', 'TOTAL_VIV_': 'TOTAL_VIV_', 'TOTAL_VI_1': 'TOTAL_VI_1', 'VIV_OCUPA_': 'VIV_OCUPA_', 'TOTAL_VIVI': 'TOTAL_VIVI', 'CANTIDAD_H': 'CANTIDAD_H', 'VIV_TIPO_C': 'VIV_TIPO_C', 'VIV_TIPO_D': 'VIV_TIPO_D', 'VIV_TIPO_T': 'VIV_TIPO_T', 'VIV_TIPO_P': 'VIV_TIPO_P', 'VIV_TIPO_M': 'VIV_TIPO_M', 'VIV_TIPO_1': 'VIV_TIPO_1', 'VIV_TIPO_O': 'VIV_TIPO_O', 'VIV_PARED_': 'VIV_PARED_', 'VIV_PARE_1': 'VIV_PARE_1', 'VIV_PARE_2': 'VIV_PARE_2', 'VIV_PARE_3': 'VIV_PARE_3', 'VIV_PARE_4': 'VIV_PARE_4', 'VIV_PARE_5': 'VIV_PARE_5', 'VIV_TECHO_': 'VIV_TECHO_', 'VIV_TECH_1': 'VIV_TECH_1', 'VIV_TECH_2': 'VIV_TECH_2', 'VIV_TECH_3': 'VIV_TECH_3', 'VIV_TECH_4': 'VIV_TECH_4', 'VIV_TECH_5': 'VIV_TECH_5', 'VIV_TECH_6': 'VIV_TECH_6', 'VIV_PISO_P': 'VIV_PISO_P', 'VIV_PISO_R': 'VIV_PISO_R', 'VIV_PISO_B': 'VIV_PISO_B', 'VIV_PISO_C': 'VIV_PISO_C', 'VIV_PISO_T': 'VIV_PISO_T', 'VIV_MATERI': 'VIV_MATERI', 'VIV_MATE_1': 'VIV_MATE_1', 'VIV_MATE_2': 'VIV_MATE_2', 'VIV_AGUA_R': 'VIV_AGUA_R', 'VIV_AGUA_P': 'VIV_AGUA_P', 'VIV_AGUA_C': 'VIV_AGUA_C', 'VIV_AGUA_1': 'VIV_AGUA_1', });
lyr_colegios_via_2.set('fieldAliases', {'AGNO': 'AGNO', 'RBD': 'RBD', 'DGV_RBD': 'DGV_RBD', 'NOM_RBD': 'NOM_RBD', 'TIPO_SOST': 'TIPO_SOST', 'COD_REG_RB': 'COD_REG_RB', 'NOM_REG_RB': 'NOM_REG_RB', 'COD_PRO_RB': 'COD_PRO_RB', 'COD_COM_RB': 'COD_COM_RB', 'NOM_COM_RB': 'NOM_COM_RB', 'COD_DEPROV': 'COD_DEPROV', 'NOM_DEPROV': 'NOM_DEPROV', 'TIPO_DEPEN': 'TIPO_DEPEN', 'DIRECCION': 'DIRECCION', 'NUMERO': 'NUMERO', 'REFERENCIA': 'REFERENCIA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'MAT_PARV': 'MAT_PARV', 'MAT_BAS_RE': 'MAT_BAS_RE', 'MAT_BAS_AD': 'MAT_BAS_AD', 'MAT_ESP': 'MAT_ESP', 'MAT_MHC_RE': 'MAT_MHC_RE', 'MAT_MHC_AD': 'MAT_MHC_AD', 'MAT_MTP_RE': 'MAT_MTP_RE', 'MAT_MTP_AD': 'MAT_MTP_AD', 'MAT_TOTAL': 'MAT_TOTAL', 'MAT_HOM_TO': 'MAT_HOM_TO', 'MAT_MUJ_TO': 'MAT_MUJ_TO', 'MAT_SI_TOT': 'MAT_SI_TOT', 'CUR_SIM_TO': 'CUR_SIM_TO', 'CUR_COMB_T': 'CUR_COMB_T', });
lyr_vm_mzn_1.set('fieldImages', {'FID_1': '', 'CUT': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'Shape__Are': '', 'Shape__Len': '', 'NOMBRE_DIS': '', 'CODIGO_DIS': '', 'MANZENT': '', 'ZONA_CENSA': '', 'MANZANA': '', 'TOTAL_PERS': '', 'TOTAL_HOMB': '', 'TOTAL_MUJE': '', 'PERSONAS_0': '', 'PERSONAS_6': '', 'PERSONAS_1': '', 'PERSONAS_M': '', 'PERSONAS_E': '', 'PUEBLOS_IN': '', 'TOTAL_VIV_': '', 'TOTAL_VI_1': '', 'VIV_OCUPA_': '', 'TOTAL_VIVI': '', 'CANTIDAD_H': '', 'VIV_TIPO_C': '', 'VIV_TIPO_D': '', 'VIV_TIPO_T': '', 'VIV_TIPO_P': '', 'VIV_TIPO_M': '', 'VIV_TIPO_1': '', 'VIV_TIPO_O': '', 'VIV_PARED_': '', 'VIV_PARE_1': '', 'VIV_PARE_2': '', 'VIV_PARE_3': '', 'VIV_PARE_4': '', 'VIV_PARE_5': '', 'VIV_TECHO_': '', 'VIV_TECH_1': '', 'VIV_TECH_2': '', 'VIV_TECH_3': '', 'VIV_TECH_4': '', 'VIV_TECH_5': '', 'VIV_TECH_6': '', 'VIV_PISO_P': '', 'VIV_PISO_R': '', 'VIV_PISO_B': '', 'VIV_PISO_C': '', 'VIV_PISO_T': '', 'VIV_MATERI': '', 'VIV_MATE_1': '', 'VIV_MATE_2': '', 'VIV_AGUA_R': '', 'VIV_AGUA_P': '', 'VIV_AGUA_C': '', 'VIV_AGUA_1': '', });
lyr_colegios_via_2.set('fieldImages', {'AGNO': '', 'RBD': '', 'DGV_RBD': '', 'NOM_RBD': '', 'TIPO_SOST': '', 'COD_REG_RB': '', 'NOM_REG_RB': '', 'COD_PRO_RB': '', 'COD_COM_RB': '', 'NOM_COM_RB': '', 'COD_DEPROV': '', 'NOM_DEPROV': '', 'TIPO_DEPEN': '', 'DIRECCION': '', 'NUMERO': '', 'REFERENCIA': '', 'LATITUD': '', 'LONGITUD': '', 'MAT_PARV': '', 'MAT_BAS_RE': '', 'MAT_BAS_AD': '', 'MAT_ESP': '', 'MAT_MHC_RE': '', 'MAT_MHC_AD': '', 'MAT_MTP_RE': '', 'MAT_MTP_AD': '', 'MAT_TOTAL': '', 'MAT_HOM_TO': '', 'MAT_MUJ_TO': '', 'MAT_SI_TOT': '', 'CUR_SIM_TO': '', 'CUR_COMB_T': '', });
lyr_vm_mzn_1.set('fieldLabels', {'FID_1': 'no label', 'CUT': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'NOMBRE_DIS': 'no label', 'CODIGO_DIS': 'no label', 'MANZENT': 'no label', 'ZONA_CENSA': 'no label', 'MANZANA': 'no label', 'TOTAL_PERS': 'no label', 'TOTAL_HOMB': 'no label', 'TOTAL_MUJE': 'no label', 'PERSONAS_0': 'no label', 'PERSONAS_6': 'no label', 'PERSONAS_1': 'no label', 'PERSONAS_M': 'no label', 'PERSONAS_E': 'no label', 'PUEBLOS_IN': 'no label', 'TOTAL_VIV_': 'no label', 'TOTAL_VI_1': 'no label', 'VIV_OCUPA_': 'no label', 'TOTAL_VIVI': 'no label', 'CANTIDAD_H': 'no label', 'VIV_TIPO_C': 'no label', 'VIV_TIPO_D': 'no label', 'VIV_TIPO_T': 'no label', 'VIV_TIPO_P': 'no label', 'VIV_TIPO_M': 'no label', 'VIV_TIPO_1': 'no label', 'VIV_TIPO_O': 'no label', 'VIV_PARED_': 'no label', 'VIV_PARE_1': 'no label', 'VIV_PARE_2': 'no label', 'VIV_PARE_3': 'no label', 'VIV_PARE_4': 'no label', 'VIV_PARE_5': 'no label', 'VIV_TECHO_': 'no label', 'VIV_TECH_1': 'no label', 'VIV_TECH_2': 'no label', 'VIV_TECH_3': 'no label', 'VIV_TECH_4': 'no label', 'VIV_TECH_5': 'no label', 'VIV_TECH_6': 'no label', 'VIV_PISO_P': 'no label', 'VIV_PISO_R': 'no label', 'VIV_PISO_B': 'no label', 'VIV_PISO_C': 'no label', 'VIV_PISO_T': 'no label', 'VIV_MATERI': 'no label', 'VIV_MATE_1': 'no label', 'VIV_MATE_2': 'no label', 'VIV_AGUA_R': 'no label', 'VIV_AGUA_P': 'no label', 'VIV_AGUA_C': 'no label', 'VIV_AGUA_1': 'no label', });
lyr_colegios_via_2.set('fieldLabels', {'AGNO': 'no label', 'RBD': 'no label', 'DGV_RBD': 'no label', 'NOM_RBD': 'no label', 'TIPO_SOST': 'no label', 'COD_REG_RB': 'no label', 'NOM_REG_RB': 'no label', 'COD_PRO_RB': 'no label', 'COD_COM_RB': 'no label', 'NOM_COM_RB': 'no label', 'COD_DEPROV': 'no label', 'NOM_DEPROV': 'no label', 'TIPO_DEPEN': 'no label', 'DIRECCION': 'no label', 'NUMERO': 'no label', 'REFERENCIA': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'MAT_PARV': 'no label', 'MAT_BAS_RE': 'no label', 'MAT_BAS_AD': 'no label', 'MAT_ESP': 'no label', 'MAT_MHC_RE': 'no label', 'MAT_MHC_AD': 'no label', 'MAT_MTP_RE': 'no label', 'MAT_MTP_AD': 'no label', 'MAT_TOTAL': 'no label', 'MAT_HOM_TO': 'no label', 'MAT_MUJ_TO': 'no label', 'MAT_SI_TOT': 'no label', 'CUR_SIM_TO': 'no label', 'CUR_COMB_T': 'no label', });
lyr_colegios_via_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});