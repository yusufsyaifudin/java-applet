import java.applet.*;
import java.awt.*;
import netscape.javascript.*;

public class apps extends Applet 
{
	public String hdr = "Hello, ";
	public JSObject window;

	public String get() 
	{
		getAppletContext().showStatus("Got here ok, your username: " + hdr);
		//this.window.eval("javascript.success()");
		return hdr + " -- ";
	}

	public void init()
	{
		super.init();
	}

	public void paint(Graphics g) 
	{
		super.paint(g);
		g.drawString(hdr,5,15);
		this.window.eval("javascript.success()");
	}

	public void put(String hdr1) 
	{
		this.window = JSObject.getWindow(this);
		hdr = "Hello, " + hdr1;
		repaint();
	}

}