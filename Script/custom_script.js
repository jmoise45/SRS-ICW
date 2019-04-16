// JavaScript Document



$(document).ready(function() {
			setTimeout(function() {

				// Accordion
				$('#menu5 > li > a.expanded + ul').slideToggle('medium');
				$('#menu5 > li > a').click(function() {
					$('#menu5 > li > a.expanded').not(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
					$(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
				});
			}, 250);
		});

		var webpageArray = [
        "calc_perform.html",
        "calc_perform2.html",
	 "tech_trends.html",
	"amdahl/amdahl.html",
	"review_digital_logic.html",
	"perf_measurement.html",
	"benchmarking.html",
	"PipelinedDatapathDesign.html",
	"ALUDesign.html",
	"ArithmeticOperations.html",
	"DatapathDesign.html",
	"DatapathControl.html",
	"Introduction_and_Overview.html",
	"Overview_of_Computer_Abstractions.html",
	"test.html"
      ];

      function loadPage(num) {
        var iframe = document.getElementById("I1");
        iframe.src = webpageArray[num];
        return false; // mandatory!
      }

function calcPerformance_1(IC, CPI, t_clock, form)
			{
				var A = parseFloat(IC);
				var B = parseFloat(CPI);
				var C = parseFloat(t_clock);


				if (!isNaN(A))
				$('#ic_1').html("IC = " + A + " instr");
				else
					$('#ic_1').html("IC = - instr");
				if (!isNaN(B))
					$('#cpi_1').html("CPI = " + B + " cyc/instr");
				else
					$('#cpi_1').html("CPI = - cyc/instr");
				if (!isNaN(C))
					$('#clock_1').html("Clock = " + C + " GHz");
				else
					$('#clock_1').html("Clock = - GHz");


				form.output_t_exe_1.value = A*B*C;



			}

			<!-- RIGHT-CLICK MENU SCRIPT -->
			$(document).bind("contextmenu", function(e) {
			$('#menu').css({
			top: e.pageY+'px',
			left: e.pageX+'px'		}).show();
			return false;	});
			$(document).ready(function() {
			$('#menu').click(function() {
			$('#menu').hide();    });
			$(document).click(function() {
			$('#menu').hide();    });});

function calcPerformance1(IC, CPI, t_clock, form)
		{
			var A = parseFloat(IC);
			var B = parseFloat(CPI);
			var C = parseFloat(t_clock);

			if (!isNaN(A))
				$('#ic_1').html("IC = " + A + " instr");
			else
				$('#ic_1').html("IC = - instr");
			if (!isNaN(B))
				$('#cpi_1').html("CPI = " + B + " cyc/instr");
			else
				$('#cpi_1').html("CPI = - cyc/instr");
			if (!isNaN(C))
				$('#clock_1').html("Clock = " + C + " GHz");
			else
				$('#clock_1').html("Clock = - GHz");


			form.output_t_exe1.value = A*B*C;
		}

		function calcPerformance2(IC, CPI, t_clock, form)
		{
			var A = parseFloat(IC);
			var B = parseFloat(CPI);
			var C = parseFloat(t_clock);

			$('#ic_2').html("IC = " + A + " instr");
			$('#cpi_2').html("CPI = " + B + " cyc/instr");
			$('#clock_2').html("Clock = " + C + " GHz");

			form.output_t_exe2.value = A*B*C;
		}

		function calcCompare(form)
		{		var m1 = parseInt(form.output_t_exe1.value);		var m2 = parseInt(form.output_t_exe2.value);

			if (m2 < m1) 		{			form.compare_t_exe.value = "M2 IS FASTER!";		}
			else if (m1 < m2)		{			form.compare_t_exe.value = "M1 IS FASTER!";		}
			else 		{			form.compare_t_exe.value = "M1 IS EQUAL TO M2!";		}
		}


	$(document).bind("contextmenu", function(e) {		$('#menu').css({			top: e.pageY+'px',			left: e.pageX+'px'		}).show();		return false;	});		$(document).ready(function() {    $('#menu').click(function() {        $('#menu').hide();    });    $(document).click(function() {        $('#menu').hide();    });});
