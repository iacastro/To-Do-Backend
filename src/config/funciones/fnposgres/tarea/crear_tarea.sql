CREATE OR REPLACE FUNCTION fn_crear_tarea(
	p_nom_tarea character varying,
	p_descripcion character varying,
	
	p_fecha_tarea DATE,
	
	p_realizada BOOL)
	
	RETURNS TABLE(id_tarea integer)
	LANGUAGE 'plpgsql'

AS $function$
DECLARE
v_id_tarea integer;

	BEGIN
		INSERT INTO  tarea (nom_tarea, descripcion_tarea, fecha_tarea, realizada)
		
		VALUES (p_nom_tarea, p_descripcion, p_fecha_tarea, p_realizada);
		v_id_tarea:= lastval();
		
		RETURN QUERY
			SELECT v_id_tarea;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
	
$function$